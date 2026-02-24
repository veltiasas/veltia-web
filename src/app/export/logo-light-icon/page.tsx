import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function LogoLightIconPage() {
  return (
    <div
      style={{
        width: "600px",
        height: "700px",
        overflow: "hidden",
        position: "relative",
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VeltiaLogo variant="light" showTagline={false} width={450} id="logo-light-icon" />
    </div>
  );
}
