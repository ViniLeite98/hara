export default function Home() {
  return (
    <main style={{ padding: 32, fontFamily: "system-ui", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>Hara</h1>
      <p style={{ fontSize: 18, lineHeight: 1.5 }}>
        Plataforma para gestão de disponibilidade de terapeutas e aprovações.
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
        <a
          href="/login"
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #000",
            textDecoration: "none",
          }}
        >
          Entrar
        </a>

        <a
          href="/dashboard"
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ccc",
            textDecoration: "none",
          }}
        >
          Ver Dashboard
        </a>
      </div>

      <hr style={{ margin: "28px 0" }} />

      <h2 style={{ fontSize: 22, marginBottom: 8 }}>Próximos passos</h2>
      <ul style={{ lineHeight: 1.7 }}>
        <li>Criar login e perfis (admin/gestor/terapeuta)</li>
        <li>Conectar o banco (Supabase/Postgres)</li>
        <li>Calendário de capacidade por dia + folgas + aprovações</li>
      </ul>
    </main>
  );
}
