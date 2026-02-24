import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function LogoDarkIconPage() {
  return (
    <div
      style={{
        width: "600px",
        height: "700px",
        overflow: "hidden",
        position: "relative",
        background: "#0A0E14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VeltiaLogo variant="dark" showTagline={false} width={450} id="logo-dark-icon" />
    </div>
  );
}
