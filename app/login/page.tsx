export default function Login() {
  return (
    <main
      style={{
        padding: 32,
        fontFamily: "system-ui",
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Login</h1>
      <p style={{ marginTop: 0, lineHeight: 1.6 }}>
        Em breve: autenticação.
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="/dashboard"
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #111",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Entrar
        </a>

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
