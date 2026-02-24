import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function LogoDarkPage() {
  return (
    <div
      style={{
        width: "800px",
        height: "900px",
        overflow: "hidden",
        position: "relative",
        background: "#0A0E14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VeltiaLogo variant="dark" showTagline={true} width={500} id="logo-dark" />
    </div>
  );
}
