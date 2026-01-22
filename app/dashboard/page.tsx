export default function Dashboard() {
  return (
    <main
      style={{
        padding: 32,
        fontFamily: "system-ui",
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Dashboard</h1>
      <p style={{ marginTop: 0, lineHeight: 1.6 }}>
        Em breve: calendário de disponibilidade e aprovações.
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="/"
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ccc",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Voltar para a Home
        </a>
      </div>
    </main>
  );
}
