export default function Home() {
  return (
    <main style={{ padding: 32, fontFamily: "system-ui" }}>
      <h1>Hara</h1>
      <p>Site em construção.</p>

      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <a href="/login">Entrar</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </main>
  );
}
