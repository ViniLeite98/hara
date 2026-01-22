"use client";
export default function Login() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        fontFamily: "system-ui",
        background: "#0b0f19",
      }}
    >
      <div style={{ width: "100%", maxWidth: 460 }}>
        <div style={{ marginBottom: 16, color: "#fff" }}>
          <h1 style={{ margin: 0, fontSize: 36, letterSpacing: -0.5 }}>Hara</h1>
          <p style={{ marginTop: 8, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
            Faça login para acessar o painel. (Integração real com Google será o próximo passo.)
          </p>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: 16,
            padding: 20,
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
          }}
        >
          <button
            type="button"
            onClick={() => alert("Ainda não integrado. Próximo passo: Supabase + Google.")}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid #111",
              background: "#111",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Entrar com Google
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "18px 0" }}>
            <div style={{ flex: 1, height: 1, background: "#e6e8eb" }} />
            <span style={{ color: "#6b7280", fontSize: 12 }}>ou</span>
            <div style={{ flex: 1, height: 1, background: "#e6e8eb" }} />
          </div>

          <label style={{ display: "block", fontSize: 13, color: "#111827", marginBottom: 6 }}>
            E-mail
          </label>
          <input
            placeholder="seuemail@exemplo.com"
            disabled
            style={{
              width: "100%",
              padding: "11px 12px",
              borderRadius: 12,
              border: "1px solid #e6e8eb",
              background: "#f9fafb",
              marginBottom: 12,
            }}
          />

          <label style={{ display: "block", fontSize: 13, color: "#111827", marginBottom: 6 }}>
            Senha
          </label>
          <input
            placeholder="••••••••"
            disabled
            style={{
              width: "100%",
              padding: "11px 12px",
              borderRadius: 12,
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
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid #e6e8eb",
              background: "#f3f4f6",
              color: "#9ca3af",
              cursor: "not-allowed",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Entrar (em breve)
          </button>

          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            <a
              href="/"
              style={{
                flex: 1,
                textAlign: "center",
                textDecoration: "none",
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #e6e8eb",
                color: "#111",
              }}
            >
              Voltar
            </a>

            <a
              href="/dashboard"
              style={{
                flex: 1,
                textAlign: "center",
                textDecoration: "none",
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid #e6e8eb",
                color: "#111",
              }}
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
