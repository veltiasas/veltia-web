import VeltiaLogo from "@/components/brand/VeltiaLogo";

export default function LogoLightPage() {
  return (
    <div
      style={{
        width: "800px",
        height: "900px",
        overflow: "hidden",
        position: "relative",
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VeltiaLogo variant="light" showTagline={true} width={500} id="logo-light" />
    </div>
  );
}
