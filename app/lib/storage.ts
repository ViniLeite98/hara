"use client";

import { useEffect, useMemo, useState } from "react";
import { Therapist, loadTherapists, saveTherapists, seedTherapistsIfEmpty } from "../../lib/storage";

export default function TerapeutasPage() {
  const [list, setList] = useState<Therapist[]>([]);
  const [name, setName] = useState("");

  // ajuste a lista inicial aqui (pode colocar as 12 terapeutas reais)
  const defaultNames = useMemo(
    () => ["Agatha", "Mel", "Ana", "Bia", "Carla", "Dani", "Gabi", "Isa", "Ju", "Lari", "Mari", "Nina"],
    []
  );

  useEffect(() => {
    const seeded = seedTherapistsIfEmpty(defaultNames);
    setList(seeded);
  }, [defaultNames]);

  const add = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    const next: Therapist[] = [
      ...list,
      { id: crypto.randomUUID(), name: trimmed, active: true },
    ];
    setList(next);
    saveTherapists(next);
    setName("");
  };

  const toggleActive = (id: string) => {
    const next = list.map((t) => (t.id === id ? { ...t, active: !t.active } : t));
    setList(next);
    saveTherapists(next);
  };

  const remove = (id: string) => {
    const next = list.filter((t) => t.id !== id);
    setList(next);
    saveTherapists(next);
  };

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 980, margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <div>
          <h1 style={{ margin: 0 }}>Terapeutas</h1>
          <p style={{ marginTop: 8, color: "#4b5563" }}>
            Cadastro local (por enquanto). Depois conectamos ao banco.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="/dashboard" style={linkStyle}>Dashboard</a>
          <a href="/" style={linkStyle}>Home</a>
        </div>
      </header>

      <section style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da terapeuta"
          style={inputStyle}
        />
        <button onClick={add} style={btnPrimary}>Adicionar</button>
      </section>

      <section style={{ marginTop: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Lista</h2>
          <span style={{ color: "#6b7280" }}>
            Ativas: <b>{list.filter((t) => t.active).length}</b> / {list.length}
          </span>
        </div>

        <div style={{ marginTop: 10, border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
          {list.map((t) => (
            <div
              key={t.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 12,
                borderTop: "1px solid #f3f4f6",
                background: "#fff",
              }}
            >
              <div>
                <div style={{ fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>
                  Status: {t.active ? "Ativa" : "Inativa"}
                </div>
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => toggleActive(t.id)} style={btnGhost}>
                  {t.active ? "Desativar" : "Ativar"}
                </button>
                <button onClick={() => remove(t.id)} style={btnDanger}>
                  Remover
                </button>
              </div>
            </div>
          ))}
          {list.length === 0 && (
            <div style={{ padding: 12, color: "#6b7280" }}>Nenhuma terapeuta cadastrada.</div>
          )}
        </div>
      </section>
    </main>
  );
}

const linkStyle: React.CSSProperties = {
  padding: "8px 12px",
  border: "1px solid #e5e7eb",
  borderRadius: 10,
  textDecoration: "none",
  color: "#111",
};

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  minWidth: 260,
};

const btnPrimary: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #111",
  background: "#111",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 700,
};

const btnGhost: React.CSSProperties = {
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  background: "#fff",
  cursor: "pointer",
};

const btnDanger: React.CSSProperties = {
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #ef4444",
  background: "#fff",
  cursor: "pointer",
  color: "#b91c1c",
  fontWeight: 700,
};
