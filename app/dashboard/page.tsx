export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 24,
        fontFamily: "system-ui",
        background: "#0b0f19",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.5 }}>Dashboard</h1>
            <p style={{ marginTop: 8, marginBottom: 0, color: "rgba(255,255,255,0.75)" }}>
              Em breve: calendario de disponibilidade e aprovacoes.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href="/"
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.2)",
                textDecoration: "none",
                color: "#fff",
                display: "inline-block",
              }}
            >
              Home
            </a>

            <a
              href="/login"
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.2)",
                textDecoration: "none",
                color: "#fff",
                display: "inline-block",
              }}
            >
              Login (em breve)
            </a>
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <div
            style={{
              background: "#111827",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: 16,
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Hoje</div>
            <div style={{ fontSize: 26, fontWeight: 800, marginTop: 6 }}>-</div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
              Terapeutas disponiveis
            </div>
          </div>

          <div
            style={{
              background: "#111827",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: 16,
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Pendencias</div>
            <div style={{ fontSize: 26, fontWeight: 800, marginTop: 6 }}>-</div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
              Aprovacoes aguardando
            </div>
          </div>

          <div
            style={{
              background: "#111827",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: 16,
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Este mes</div>
            <div style={{ fontSize: 26, fontWeight: 800, marginTop: 6 }}>-</div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
              Folgas registradas
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#ffffff",
            color: "#0b0f19",
            borderRadius: 16,
            border: "1px solid rgba(0,0,0,0.08)",
            padding: 18,
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>Calendario (em breve)</h2>
          <p style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.6 }}>
            Aqui vai entrar o calendario mostrando a capacidade por dia (considerando folgas e aprovacoes).
          </p>

          <div
            style={{
              marginTop: 14,
              padding: 14,
              borderRadius: 14,
              border: "1px dashed #d1d5db",
              background: "#f9fafb",
              color: "#6b7280",
            }}
          >
            Placeholder: calendario + filtros (mes, terapeuta, status).
          </div>
        </section>
      </div>
    </main>
  );
}
