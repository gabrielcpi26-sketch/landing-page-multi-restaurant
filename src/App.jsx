import LandingPro from "./LandingPro";

function DataDeletion() {
  return (
    <div style={{ fontFamily: "Arial", padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1>Solicitud de Eliminación de Datos</h1>
      <p>
        Si deseas solicitar la eliminación de tus datos personales, envía un correo a:
      </p>
      <h2>soporte@gadiapps.com</h2>
      <p>
        Incluye tu nombre completo y el número con el que te registraste. Procesaremos tu
        solicitud en un plazo máximo de 72 horas.
      </p>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname || "/";
  if (path === "/data-deletion" || path === "/data-deletion/") return <DataDeletion />;
  return <LandingPro />;
}
