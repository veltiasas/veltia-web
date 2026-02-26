"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>{}[]";
const CYCLE_INTERVAL = 40;
const RESOLVE_DURATION = 400;
const STAGGER_DELAY = 150;

interface CharState {
  char: string;
  resolved: boolean;
}

interface CipherTextProps {
  text: string;
  className?: string;
  delay?: number;
  onComplete?: () => void;
}

function getRandomChar(): string {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

export default function CipherText({
  text,
  className = "",
  delay = 0,
  onComplete,
}: CipherTextProps) {
  const [mounted, setMounted] = useState(false);
  const [allResolved, setAllResolved] = useState(false);
  const [chars, setChars] = useState<CharState[]>(() =>
    Array.from(text).map((c) => ({ char: c, resolved: true }))
  );
  const [started, setStarted] = useState(false);

  // Hydration-safe: only start animation after mount
  useEffect(() => {
    setMounted(true);
    setChars(Array.from(text).map(() => ({ char: getRandomChar(), resolved: false })));
  }, [text]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const onCompleteRef = useRef(onComplete);

  // Keep onComplete ref fresh without triggering effects
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Handle delay before starting
  useEffect(() => {
    if (!mounted) return;
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay, mounted]);

  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  // Main animation logic
  useEffect(() => {
    if (!started) return;

    const textChars = Array.from(text);
    const resolvedSet = new Set<number>();

    // Cycle all unresolved characters rapidly
    intervalRef.current = setInterval(() => {
      setChars((prev) =>
        prev.map((c, i) => {
          if (resolvedSet.has(i)) return c;
          return { char: getRandomChar(), resolved: false };
        })
      );
    }, CYCLE_INTERVAL);

    // Schedule each character to resolve with stagger
    textChars.forEach((finalChar, i) => {
      const resolveAt = RESOLVE_DURATION + i * STAGGER_DELAY;
      const timeout = setTimeout(() => {
        resolvedSet.add(i);
        setChars((prev) =>
          prev.map((c, j) =>
            j === i ? { char: finalChar, resolved: true } : c
          )
        );

        // If this is the last character, stop cycling and fire onComplete
        if (resolvedSet.size === textChars.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setAllResolved(true);
          onCompleteRef.current?.();
        }
      }, resolveAt);
      timeoutsRef.current.push(timeout);
    });

    return cleanup;
  }, [started, text, cleanup]);

  // Cleanup on unmount
  useEffect(() => cleanup, [cleanup]);

  return (
    <>
      <style>{`
        @keyframes cipherFlicker {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
      {allResolved ? (
        <span className={className} aria-label={text}>
          {text}
        </span>
      ) : (
        <span className={`${className} !bg-none !bg-clip-border`} style={{ WebkitTextFillColor: "initial", color: "var(--color-ice)" }} aria-label={text}>
          {chars.map((c, i) => (
            <span
              key={i}
              className="inline-block"
              style={
                c.resolved
                  ? {
                      color: "var(--color-ice)",
                      transition: "color 0.3s ease",
                    }
                  : {
                      color: "var(--color-neon)",
                      animation: "cipherFlicker 0.15s ease-in-out infinite alternate",
                    }
              }
            >
              {c.char}
            </span>
          ))}
        </span>
      )}
    </>
  );
}
