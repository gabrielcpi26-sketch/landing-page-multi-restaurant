// 🚀 LandingPro.jsx — Versión estable COMPLETA
// Diana: landing pensada para cerrar ventas sin errores de sintaxis.

import React, { useEffect, useState } from "react";
console.log("🔥 ESTE ES LandingPro.jsx (se está ejecutando)");

const LOGO_URL = "/logo.png";
const DEMO_URL = "/nubias-demo.jpg";
const AVATAR_URL = "/avatar.mp4";

// Video real de Diana (sube tu .mp4 a /public y ajusta esta ruta si es necesario)
const DIANA_REAL_VIDEO_URL = "/diana-real.mp4";

// Mockups carrusel hero
const MOCKUPS = [
  {
    src: "/mockup-miniapp-1.png",
    title: "Mini-app para taquería",
    subtitle: "Pedidos organizados por WhatsApp.",
  },
  {
    src: "/mockup-miniapp-2.png",
    title: "Snack / cafetería",
    subtitle: "Combos y extras sin errores en cocina.",
  },
  {
    src: "/mockup-miniapp-3.png",
    title: "Restaurante familiar",
    subtitle: "Más tickets en fines de semana.",
  },
];

// Mockups para la sección "Así llegan los pedidos…"
const WHATSAPP_MOCKS = ["/mockup-ws-1.png", "/mockup-ws-2.png", "/mockup-ws-3.png"];

const WHATSAPP_NUMBER = "524872586302";
const WHATSAPP_MESSAGE =
  "Hola Diana, quiero activar mi mini-app para mi restaurante y agendar una demo.";
const whatsapp = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const demoMenuURL =
  "https://plataforma-multi-restaurante-a3ga.vercel.app/?view=cliente&rest=nubia-s-snack";

const CASES = [
  {
    nombre: "Nubia's Snack",
    resultado: "+27% más pedidos organizados",
    detalle:
      "Antes recibían mensajes confusos. Ahora cada pedido llega como ticket listo para cocina.",
  },
  {
    nombre: "Taquería El Camino",
    resultado: "+32% ventas en fines de semana",
    detalle:
      "Implementaron la mini-app y ahora en horas pico no pierden pedidos por WhatsApp.",
  },
  {
    nombre: "Café La Terraza",
    resultado: "0 errores en cocina",
    detalle:
      "Cada bebida y extra llega detallado. El cliente recibe su orden exactamente como la pidió.",
  },
];

const TESTIMONIALS = [
  {
    nombre: "Nubia, dueña de Nubia's Snack",
    texto:
      "Antes los clientes mandaban notas de voz y fotos mezcladas. Ahora cada pedido llega clarito y ya no me confundo al cobrar.",
    resultado: "+27% más pedidos organizados",
  },
  {
    nombre: "Luis, Taquería El Camino",
    texto:
      "En fines de semana siempre perdíamos pedidos. Con la mini-app, la gente arma su orden y solo confirmamos por WhatsApp.",
    resultado: "+32% más ventas en horas pico",
  },
  {
    nombre: "Ana, Café La Terraza",
    texto:
      "Los baristas ahora reciben el ticket con todos los extras. Se acabaron los errores en las bebidas.",
    resultado: "0 errores en cocina",
  },
];

const styles = `
  /* 🔥 Quitar el marco blanco y centrar todo el contenido en móvil */
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    background: #05030b;
  }
 


 @keyframes fadeUp {
    from { opacity:0; transform:translateY(20px); }
    to { opacity:1; transform:translateY(0); }
  }




  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  }

  @keyframes gridMove {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
  }

    @keyframes autoScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* 👇 Desplazamiento continuo sin corte */
  @keyframes hero-ws-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes pulseGlow {
    0% { box-shadow: 0 0 0 rgba(34,197,94,0); }
    50% { box-shadow: 0 0 40px rgba(34,197,94,0.8); }
    100% { box-shadow: 0 0 0 rgba(34,197,94,0); }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  @keyframes pulseWarning {
    0% { box-shadow: 0 0 14px rgba(255,80,80,0.25); }
    50% { box-shadow: 0 0 28px rgba(255,80,80,0.55); }
    100% { box-shadow: 0 0 14px rgba(255,80,80,0.25); }
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }

  .testimonial-track {
    display: flex;
    gap: 16px;
    width: max-content;
    padding-bottom: 6px;
    animation: autoScroll 26s linear infinite;
  }

  .testimonial-track::-webkit-scrollbar {
    display: none;
  }

  .testimonial-card {
    min-width: 260px;
    max-width: 320px;
  }


  .hero-ws-wrapper {
    position: relative;
  }

  .hero-ws-track {
    display: flex;
    gap: 0;
    animation: hero-ws-scroll 10s linear infinite;
  }

  .hero-ws-card {
    min-width: 100%;
  }

  .carousel-wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-top: 16px;
  }

  .auto-carousel {
    display: flex;
    gap: 18px;
    width: max-content;
    animation: autoScroll 22s linear infinite;
  }

  .mockup-card {
    flex: 0 0 260px;
    max-width: 260px;
    background: #020617;
    border-radius: 22px;
    border: 1px solid #1f2937;
    padding: 14px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.8);
    transform: perspective(800px) rotateY(10deg);
    transition: transform 0.28s ease, box-shadow 0.28s ease;
  }

  .mockup-card:hover {
    transform: perspective(800px) rotateY(0deg) translateY(-4px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.95);
  }

  .mockup-card img {
    width: 100%;
    max-height: 420px;
    object-fit: cover;
    object-position: center top;
    border-radius: 18px;
    margin-bottom: 10px;
  }

  .mockup-card-title {
    font-size: 14px;
    font-weight: 600;
    color: #e5e7eb;
    margin-bottom: 2px;
  }

  .mockup-card-subtitle {
    font-size: 13px;
    color: #9ca3af;
  }

  @media (max-width: 768px) {
    .mockup-card {
      flex: 0 0 220px;
      max-width: 220px;
    }
  }
`;

function getTimeLeftToEndOfDay() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = end.getTime() - now.getTime();
  if (diff <= 0) {
    return { hours: "00", minutes: "00", seconds: "00" };
  }
  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(
    Math.floor((diff / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
  return { hours, minutes, seconds };
}

function LandingPro() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeftToEndOfDay);
  const [avatarMuted, setAvatarMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const handlePlanWhatsAppClick = () => {
    window.open(whatsapp, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeftToEndOfDay());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#05030b",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Fondo de rejilla animada */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            animation: "gridMove 18s linear infinite",
          }}
        />

        {/* Header sticky minimal */}
      <header
  style={{
    position: "sticky",
    top: 0,
    backdropFilter: "blur(14px)",
    background: "rgba(5,3,12,0.92)",
    zIndex: 50,
    borderBottom: "1px solid #1f2937",
    padding: isMobile ? "8px 14px" : "12px 20px", // 👈 más compacto en cel
  }}
>


          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img
                src={LOGO_URL}
                alt="logo"
                style={{ width: 40, height: 40, objectFit: "contain" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={{ fontSize: 16, fontWeight: 600 }}>Mini-App PRO</div>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "9px 18px",
                borderRadius: 999,
                border: "1px solid #22c55e",
                color: "#22c55e",
                textDecoration: "none",
                fontSize: 13,
              }}
            >
              Hablar por WhatsApp
            </a>
          </div>
        </header>

        {/* Franja de beneficios rápidos */}
        <div
  style={{
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
    fontSize: isMobile ? 11 : 12,
    padding: isMobile ? "8px 14px 2px" : "10px 20px 4px",
    opacity: 0.85,
  }}
>

          ✔ Mini-app lista en 24 horas · ✔ Sin comisiones por pedido · ✔ Soporte
          directo con Diana
        </div>

        {/* HERO */}
        <section
          style={{
            maxWidth: 760,
            margin: isMobile ? "10px auto 32px" : "0 auto 40px",
            padding: isMobile ? "0 16px" : "0 20px",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 16px",
                borderRadius: 999,
                background: "#1f2937",
                fontSize: 11,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Cupos abiertos · Solo 7 restaurantes por ciudad
            </div>
          </div>

          <h1
            style={{
              fontSize: isMobile ? 26 : 34,
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: isMobile ? 18 : 14,
            }}
          >
            🔥 Tu restaurante puede vender MÁS hoy mismo con una mini-app que
            convierte curiosos en pedidos reales.
          </h1>

          <p
            style={{
              color: "#d1d5db",
              fontSize: 16,
              maxWidth: 640,
              margin: "0 auto 22px",
            }}
          >
            Restaurantes como el tuyo están dejando de perder pedidos en horas
            pico y organizando todos sus mensajes con una mini-app sencilla que
            tus clientes usan desde WhatsApp.
          </p>

          

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
              flexWrap: isMobile ? "nowrap" : "wrap",
              flexDirection: isMobile ? "column" : "row",
              marginBottom: 18,
            }}
          >
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                width: isMobile ? "88%" : "auto",   // 👈 más angosto en cel
                maxWidth: 420,
                margin: "0 auto",                   // 👈 centrado
                padding: "14px 26px",
                background: "#22c55e",
                color: "black",
                fontSize: 16,
                borderRadius: 999,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              🚀 Activar mi mini-app hoy
            </a>

            <a
              href={demoMenuURL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                width: isMobile ? "88%" : "auto",   // 👈 igual que el verde
                maxWidth: 420,
                margin: "0 auto",
                padding: "14px 26px",
                borderRadius: 999,
                border: "1px solid #4b5563",
                fontSize: 15,
                textDecoration: "none",
                color: "white",
              }}
            >
              Ver demo real
            </a>
          </div>


          {/* Avatar principal */}
          <div className="hero-avatar">
            <p
              style={{
                color: "#9ca3af",
                fontSize: 13,
                marginBottom: 8,
                textAlign: "left",
              }}
            >
              Tu anfitriona digital — Toca el video para activar el audio y en
              menos de 30 segundos te explico cómo tu mini-app puede aumentar
              tus ventas desde hoy.
            </p>

            <video
              src={AVATAR_URL}
              autoPlay
              muted={avatarMuted}
              playsInline
              loop
              controls={false}
              controlsList="nofullscreen nodownload noplaybackrate"
              disablePictureInPicture
              onClick={(e) => {
                const newMuted = !avatarMuted;
                setAvatarMuted(newMuted);
                e.currentTarget.muted = newMuted;
                if (!newMuted) {
                  const playPromise = e.currentTarget.play();
                  if (playPromise?.catch) {
                    playPromise.catch(() => {});
                  }
                }
              }}
              style={{
                width: "100%",
                maxWidth: isMobile ? 320 : 360,
                height: isMobile ? 520 : 640,
                objectFit: "cover",
                display: "block",
                margin: isMobile ? "8px auto 0" : "4px auto 0",
                cursor: "pointer",
                borderRadius: 20,
                boxShadow:
                  "0 0 45px rgba(34,197,94,0.65), 0 18px 40px rgba(0,0,0,0.7)",
              }}
            />

            <div
              style={{
                marginTop: 6,
                fontSize: 11,
                color: "#9ca3af",
                textAlign: "left",
              }}
            >
              {avatarMuted
                ? "🔊 Toca el video para escuchar el audio."
                : "✅ Audio activado."}
            </div>
          </div>

          {/* Tarjeta premium con video real de Diana */}
          <div style={{ marginTop: isMobile ? 26 : 32 }}>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 10,
                textAlign: "left",
              }}
            >
              Conoce a Diana — creadora de Mini-App PRO
            </h3>

            <div
              style={{
                borderRadius: 28,
                background:
                  "radial-gradient(circle at top, rgba(34,197,94,0.2), #020617)",
                border: "1px solid rgba(34,197,94,0.7)",
                padding: isMobile ? 16 : 20,
                boxShadow: "0 18px 45px rgba(0,0,0,0.9)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "space-between",
                  alignItems: isMobile ? "flex-start" : "center",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      color: "#a5b4fc",
                      marginBottom: 4,
                    }}
                  >
                    FUNDADORA
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    Diana Montoya
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: "#d1d5db",
                      maxWidth: 320,
                    }}
                  >
                    Acompañándote paso a paso para que tu restaurante venda más
                    con tecnología simple.
                  </p>
                </div>

                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(34,197,94,0.8)",
                    background: "rgba(15,23,42,0.95)",
                    fontSize: 12,
                    color: "#e5e7eb",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>🤝</span>
                  <span>Atención directa por WhatsApp</span>
                </div>
              </div>

              <div
                style={{
                  background: "black",
                  borderRadius: 22,
                  overflow: "hidden",
                  marginBottom: 16,
                }}
              >
                <video
                  src={DIANA_REAL_VIDEO_URL}
                  controls
                  playsInline
                  style={{
                    display: "block",
                    width: "100%",
                    height: isMobile ? 210 : 260,
                    objectFit: "cover",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: "#e5e7eb",
                  marginBottom: 14,
                  textAlign: "left",
                }}
              >
                "Yo personalmente preparo tu mini-app, reviso tu menú y te dejo
                todo listo para que puedas empezar a recibir pedidos organizados
                en menos de 24 horas."
              </p>

              <div style={{ textAlign: "center" }}>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 26px",
                    borderRadius: 999,
                    background: "#22c55e",
                    color: "#022c22",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Hablar con Diana ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Carrusel de mockups (auto scroll) */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 40px",
            padding: "0 20px",
          }}
        >
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 6,
              textAlign: "left",
            }}
          >
            Ejemplos de mini-apps en acción
          </h3>

          <p
            style={{
              fontSize: 13,
              color: "#9ca3af",
              marginBottom: 12,
            }}
          >
            Mira cómo se ve tu mini-app en el celular de tus clientes: lista para
            que armen su pedido y te lo envíen por WhatsApp.
          </p>

          <div className="carousel-wrapper">
            <div className="auto-carousel">
              {MOCKUPS.concat(MOCKUPS).map((mock, idx) => (
                <div key={idx} className="mockup-card">
                  <img
                    src={mock.src}
                    alt={mock.title}
                    style={{
                      width: "100%",
                      maxHeight: 420,
                      objectFit: "cover",
                      objectPosition: "center top",
                      borderRadius: 18,
                      marginBottom: 10,
                      display: "block",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="mockup-card-title">{mock.title}</div>
                  <div className="mockup-card-subtitle">{mock.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurantes que ya confían en Mini-App PRO */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 32px",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              marginBottom: 18,
            }}
          >
            Restaurantes que ya confían en{" "}
            <span style={{ color: "#22c55e" }}>Mini-App PRO</span>
          </h2>

          {/* Chips de negocios */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            {["Nubia's Snack", "Taquería El Camino", "Café La Terraza", "Don Beto Burgers"].map(
              (name) => (
                <div
                  key={name}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    background: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(31,41,55,0.9)",
                    fontSize: 14,
                  }}
                >
                  {name}
                </div>
              )
            )}
          </div>

          {/* Faja con número de negocios */}
          <div
            style={{
              margin: "0 auto",
              maxWidth: 640,
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(55,65,81,0.9)",
              fontSize: 13,
              color: "#e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span>⭐</span>
            <span>
              Más de{" "}
              <span style={{ fontWeight: 700 }}>58 negocios</span> ya usan Mini-App PRO
              para vender más.
            </span>
          </div>
        </section>

        {/* ¿Es seguro activar tu mini-app? */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 40px",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            ¿Es seguro activar tu mini-app?
          </h2>

          <div
            style={{
              background: "rgba(15,23,42,0.96)",
              borderRadius: 26,
              border: "1px solid rgba(31,41,55,0.95)",
              padding: 22,
              maxWidth: 780,
              margin: "0 auto",
            }}
          >
            {[
              "Pagas solo cuando tengas tu mini-app funcionando.",
              "Entrega garantizada en menos de 24 horas.",
              "Comunicación y soporte directo conmigo por WhatsApp.",
            ].map((text, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 14,
                  color: "#e5e7eb",
                  marginBottom: idx === 2 ? 0 : 10,
                }}
              >
                <span style={{ fontSize: 18, lineHeight: "20px" }}>✔</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ¿Para quién es Mini-App PRO? */}
        <section
          style={{
            maxWidth: 1100,
            margin: "40px auto",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            ¿Para quién es Mini-App PRO?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {/* COLUMNA IZQUIERDA */}
            <div
              style={{
                background: "rgba(15,23,42,0.9)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.8)",
                padding: 20,
                color: "#e5e7eb",
                fontSize: 15,
                lineHeight: 1.55,
              }}
            >
              <div style={{ marginBottom: 12 }}>
                ✅ Para restaurantes, taquerías, snacks, cafeterías y dark kitchens
                que ya reciben pedidos por WhatsApp.
              </div>
              <div style={{ marginBottom: 12 }}>
                ✅ Para dueños que quieren dejar de perder pedidos en horas pico y
                tener cada orden clara para cocina.
              </div>
              <div style={{ marginBottom: 12 }}>
                ✅ Para negocios que quieren verse más profesionales sin pagar una
                app carísima ni comisiones por pedido.
              </div>
              <div>
                ✅ Para quienes quieren empezar a vender más esta misma semana con
                algo simple de usar.
              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div
              style={{
                background: "rgba(15,23,42,0.9)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.8)",
                padding: 20,
                color: "#e5e7eb",
                fontSize: 15,
                lineHeight: 1.55,
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
                ¿Para quién NO es?
              </h3>

              <div style={{ marginBottom: 12 }}>
                ❌ No es para quien no quiere atender pedidos por WhatsApp.
              </div>
              <div style={{ marginBottom: 12 }}>
                ❌ No es para negocios que no están dispuestos a mandar fotos y
                precios de su menú.
              </div>
              <div>❌ No es para quien quiere “probar” pero nunca toma acción.</div>
            </div>
          </div>
        </section>

        {/* Sección: Así llegan los pedidos a tu WhatsApp */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 40px",
            padding: "0 20px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: 16,
              marginBottom: 4,
            }}
          >
            Así llegan los pedidos a tu WhatsApp 📲
          </h3>
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#9ca3af",
              marginBottom: 18,
            }}
          >
            Recibe pedidos claros, completos y automáticos. Sin llamadas, sin
            estrés.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
              gap: 24,
              alignItems: "center",
            }}
          >
            {/* Columnas texto */}
            <div>
              <h4
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                Todo lo que recibes al activar Mini-App PRO
              </h4>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  fontSize: 13,
                  color: "#e5e7eb",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <li>
                  Mini-app personalizada con tus logos, colores y menú completo.
                </li>
                <li>
                  Ticket automático para cocina con cada pedido, claro y ordenado.
                </li>
                <li>
                  QR del menú listo para imprimir y pegar en tu negocio.
                </li>
                <li>
                  Atención directa para ajustar tu menú y mejorar tickets.
                </li>
                <li>Plantilla de mensajes para anunciar tu nueva mini-app.</li>
              </ul>

              <h4
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginTop: 18,
                  marginBottom: 8,
                }}
              >
                ¿Cómo funciona paso a paso?
              </h4>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  fontSize: 13,
                  color: "#e5e7eb",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <li>Me mandas tu logo y tu menú por WhatsApp.</li>
                <li>En menos de 24 horas preparo tu mini-app con tus pedidos.</li>
                <li>
                  Te envío el link y los QR para que los pongas en tu local y redes.
                </li>
                <li>
                  Tus clientes ordenan, pagan y tú solo confirmas y cobras sin
                  confusión.
                </li>
              </ol>
            </div>

            {/* Carrusel WhatsApp */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="hero-ws-wrapper float"
                style={{
                  background:
                    "radial-gradient(circle at top, rgba(34,197,94,0.22), rgba(2,6,23,0.9))",
                  borderRadius: 26,
                  border: "1px solid rgba(15,23,42,0.7)",
                  padding: 10,
                  boxShadow:
                    "0 0 45px rgba(34,197,94,0.55), 0 22px 55px rgba(0,0,0,0.9)",
                  maxWidth: 340,
                  width: "100%",
                  overflow: "hidden",
                  marginLeft: -16,
                }}
              >
                <div className="hero-ws-track">
                  {WHATSAPP_MOCKS.concat(WHATSAPP_MOCKS).map((src, idx) => (
                    <div key={idx} className="hero-ws-card">
                      <img
                        src={src}
                        alt={`Mockup pedido WhatsApp ${idx + 1}`}
                        style={{
                          width: "100%",
                          borderRadius: 20,
                          objectFit: "cover",
                          display: "block",
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos reales */}
        <section
          style={{ maxWidth: 1100, margin: "0 auto 40px", padding: "0 20px" }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
            Casos reales de negocios como el tuyo
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {CASES.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: 18,
                  borderRadius: 16,
                  background: "#111827",
                  border: "1px solid #1f2937",
                }}
              >
                <div style={{ fontSize: 13, color: "#9ca3af" }}>{c.nombre}</div>

                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    margin: "4px 0 6px",
                  }}
                >
                  {c.resultado}
                </div>

                <p style={{ color: "#aaa", fontSize: 13 }}>{c.detalle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ¿Quién está detrás de Mini-App PRO? */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 40px",
            padding: "0 20px",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
            ¿Quién está detrás de Mini-App PRO?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
                fontSize: 14,
                color: "#e5e7eb",
              }}
            >
              <p>
                Soy Diana Montoya y llevo años trabajando con negocios de comida
                que venden por WhatsApp: snacks, taquerías, cafeterías y
                restaurantes locales.
              </p>
              <p>
                Después de ver cómo muchos dueños perdían pedidos por mensajes
                confusos, notas de voz y papelitos, creé Mini-App PRO para que
                cualquier restaurante pueda tener su propia “app” de pedidos sin
                pagar miles de pesos ni comisiones por pedido.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
                fontSize: 14,
                color: "#e5e7eb",
              }}
            >
              <p>
                "No necesitas ser experto en tecnología para tener tu propio
                sistema de pedidos. Sólo necesitas tomar la decisión de dejar de
                perder ventas y empezar a ordenar tus pedidos." – Diana
              </p>
              <p>
                Si tu restaurante ya vende rico, Mini-App PRO te ayuda a vender
                mejor: más organizado, más rápido y con menos errores.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonios + Plan Restaurante */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 50px",
            padding: "0 20px",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 6 }}>
            Lo que dicen dueños como tú
          </h2>
          <p
            style={{
              fontSize: 13,
              color: "#9ca3af",
              marginBottom: 14,
            }}
          >
           

 Desliza para ver más testimonios.
          </p>
          <div style={{ overflow: "hidden", marginBottom: 24 }}>
            <div className="testimonial-track">
              {TESTIMONIALS.concat(TESTIMONIALS).map((t, i) => (
                <div
                  key={i}
                  className="testimonial-card"
                  style={{
                    background: "rgba(15,23,42,0.95)",
                    borderRadius: 22,
                    border: "1px solid rgba(31,41,55,0.9)",
                    padding: 18,
                    color: "#e5e7eb",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      marginBottom: 10,
                    }}
                  >
                    “{t.texto}”
                  </p>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#9ca3af",
                      marginBottom: 4,
                    }}
                  >
                    {t.nombre}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#4ade80",
                      fontWeight: 600,
                    }}
                  >
                    {t.resultado}
                  </div>
                </div>
              ))}
            </div>
          </div>

                

 </section>

       {/* PLAN RESTAURANTE LOCAL */}
<section
  style={{
    maxWidth: 1100,
    margin: "0 auto 60px",
    padding: "0 20px",
  }}
>
  {/* Barra superior: textos + badges */}
  <div
    style={{
      marginBottom: 16,
      fontSize: 13,
      color: "#e5e7eb",
    }}
  >
    <div style={{ marginBottom: 4 }}>
      Lanzamiento especial · Sólo 7 restaurantes por ciudad
    </div>
    <div>
      Último día de promoción · Termina en{" "}
      <span style={{ fontWeight: 700 }}>
        {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </span>
    </div>
  </div>

  {/* Card del plan */}
  <div
    style={{
      position: "relative",
      borderRadius: 24,
      background: "rgba(15,23,42,0.98)",
      border: "1px solid rgba(34,197,94,0.5)",
      padding: 22,
      overflow: "hidden",
    }}
  >
    {/* Capa decorativa (YA NO CAPTA CLICKS) */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at top, rgba(34,197,94,0.18), transparent 55%)",
        pointerEvents: "none",   // 👈 IMPORTANTE: no roba el click
        zIndex: 0,
      }}
    />

    {/* Contenido real del card */}
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* Badges de garantía / pago / soporte */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 14,
          fontSize: 12,
        }}
      >
        <div
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(15,23,42,0.95)",
            border: "1px solid rgba(52,211,153,0.6)",
            color: "#bbf7d0",
          }}
        >
          ⏱ Garantía 24h
        </div>
        <div
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(15,23,42,0.95)",
            border: "1px solid rgba(52,211,153,0.6)",
            color: "#bbf7d0",
          }}
        >
          💸 Pago después de entrega
        </div>
        <div
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(15,23,42,0.95)",
            border: "1px solid rgba(34,197,94,0.6)",
            fontSize: 12,
            color: "#bbf7d0",
          }}
        >
          📞 Soporte directo
        </div>
      </div>

      {/* Título plan */}
      <h3
        style={{
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        Plan Restaurante Local
      </h3>

      <div
        style={{
          fontSize: 13,
          color: "#9ca3af",
          marginBottom: 10,
        }}
      >
        Precio congelado de por vida si contratas hoy.
      </div>

      {/* Precio */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontSize: 14,
            color: "#6b7280",
            textDecoration: "line-through",
          }}
        >
          $499
        </span>
        <span
          style={{
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          $299
        </span>
        <span style={{ fontSize: 13, color: "#9ca3af" }}>MXN / mes</span>
      </div>

      {/* Bullets */}
      <ul
        style={{
          margin: 0,
          paddingLeft: 20,
          fontSize: 14,
          color: "#e5e7eb",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginBottom: 18,
        }}
      >
        <li>
          Sin comisiones por pedido. Sin contrato forzoso. Tu mini-app lista en
          menos de 24 horas.
        </li>
        <li>Menú digital ilimitado con fotos y descripciones.</li>
        <li>Pedidos automáticos por WhatsApp con ticket listo para cocina.</li>
        <li>Reportes básicos de ventas (día, semana y mes).</li>
        <li>QR del menú y opción de QR por mesa.</li>
      </ul>

      {/* BOTÓN VERDE FINAL: usa el mismo link "whatsapp" que el resto */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 26px",
          borderRadius: 999,
          background: "#22c55e",
          color: "#022c22",
          fontWeight: 700,
          fontSize: 16,
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        Quiero activar mi mini-app ahora
      </a>
    </div>
  </div>
</section>

        

        {/* Bonos exclusivos de lanzamiento */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 40px",
            padding: "0 20px",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
            Bonos exclusivos de lanzamiento
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
                fontSize: 14,
                color: "#e5e7eb",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
                Bono 1 – Instalación guiada
              </div>
              <p style={{ margin: 0 }}>
                Te acompaño paso a paso por videollamada para que dejes tu
                mini-app funcionando en tu celular.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
                fontSize: 14,
                color: "#e5e7eb",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
                Bono 2 – Plantillas de mensajes
              </div>
              <p style={{ margin: 0 }}>
                Textos listos para avisar a tus clientes que ahora tienes
                mini-app y que empiecen a pedir por WhatsApp.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
                fontSize: 14,
                color: "#e5e7eb",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
                Bono 3 – Revisión de menú
              </div>
              <p style={{ margin: 0 }}>
                Te doy recomendaciones para ordenar tu menú y crear combos que
                aumenten tu ticket promedio.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ — Preguntas frecuentes */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 40px",
            padding: "0 20px",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
            Preguntas frecuentes
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr)",
              gap: 14,
            }}
          >
            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 4,
                }}
              >
                ¿Tengo que firmar contrato forzoso?
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#e5e7eb" }}>
                No. Pagas mes a mes y puedes cancelar cuando quieras.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 4,
                }}
              >
                ¿Qué pasa si no me entregas la mini-app?
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#e5e7eb" }}>
                No pagas nada. Sólo pagas cuando tu mini-app está funcionando y
                lista para usar.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 4,
                }}
              >
                ¿Necesito computadora?
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#e5e7eb" }}>
                No, todo se maneja desde tu celular con WhatsApp.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.95)",
                borderRadius: 22,
                border: "1px solid rgba(31,41,55,0.9)",
                padding: 18,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 4,
                }}
              >
                ¿Puedo cambiar precios o platillos después?
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#e5e7eb" }}>
                Sí, puedes pedirme ajustes y te ayudo a actualizarlos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto 60px",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>
            ¿Lista para activar tu Mini-App PRO?
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "#d1d5db",
              maxWidth: 620,
              margin: "0 auto 20px",
            }}
          >
            En menos de 24 horas puedes tener tu mini-app funcionando, lista para
            recibir pedidos organizados por WhatsApp y dejar de perder ventas en
            horas pico.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "14px 28px",
                borderRadius: 999,
                background: "#22c55e",
                color: "#022c22",
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              🚀 Hablar con Diana por WhatsApp
            </a>

            <a
              href={demoMenuURL}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "14px 24px",
                borderRadius: 999,
                border: "1px solid #4b5563",
                color: "#e5e7eb",
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Ver demo de la mini-app
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPro;
