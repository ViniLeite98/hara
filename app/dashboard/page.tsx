export default function Login() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        fontFamily: "system-ui",
        background: "#f6f7f9",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fff",
          border: "1px solid #e6e8eb",
          borderRadius: 14,
          padding: 20,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 28 }}>Entrar</h1>
        <p style={{ marginTop: 8, marginBottom: 16, color: "#4b5563", lineHeight: 1.5 }}>
          Acesse o Hara para ver o painel e, em breve, o calendário de disponibilidade.
        </p>

        {/* Botão "visual" — ainda não integra Google */}
        <button
          type="button"
          onClick={() => alert("Ainda não integrado. Próximo passo: Supabase + Google.")}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #111",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Entrar com Google
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#e6e8eb" }} />
          <span style={{ color: "#6b7280", fontSize: 12 }}>ou</span>
          <div style={{ flex: 1, height: 1, background: "#e6e8eb" }} />
        </div>

        {/* Campos apenas de layout (não funcionais por enquanto) */}
        <label style={{ display: "block", fontSize: 13, color: "#374151", marginBottom: 6 }}>
          E-mail
        </label>
        <input
          type="email"
          placeholder="seuemail@exemplo.com"
          disabled
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e6e8eb",
            background: "#f9fafb",
            marginBottom: 12,
          }}
        />

        <label style={{ display: "block", fontSize: 13, color: "#374151", marginBottom: 6 }}>
          Senha
        </label>
        <input
          type="password"
          placeholder="••••••••"
          disabled
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e6e8eb",
            background: "#f9fafb",
            marginBottom: 16,
          }}
        />

        <button
          type="button"
          disabled
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e6e8eb",
            background: "#f3f4f6",
            color: "#9ca3af",
            cursor: "not-allowed",
            fontWeight: 600,
          }}
        >
          Entrar (em breve)
        </button>

        <div style={{ marginTop: 16, display: "flex", gap: 10, justifyContent: "space-between" }}>
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: 14,
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid #e6e8eb",
              background: "#fff",
            }}
          >
            Voltar para Home
          </a>

          <a
            href="/dashboard"
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: 14,
              padding: "8px 10px",
              borderRadius: 10,
              border: "1px solid #e6e8eb",
              background: "#fff",
            }}
          >
            Ir para Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
