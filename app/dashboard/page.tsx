"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (!session) {
        router.replace("/login");
        return;
      }

      setEmail(session.user.email ?? null);
    })();
  }, [router]);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  return (
    <main style={{ padding: 32, fontFamily: "system-ui" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="/" style={{ padding: "8px 12px", border: "1px solid #ddd", borderRadius: 10, textDecoration: "none" }}>
            Home
          </a>
          <button
            onClick={signOut}
            style={{ padding: "8px 12px", border: "1px solid #111", borderRadius: 10, cursor: "pointer" }}
          >
            Sair
          </button>
        </div>
      </div>

      <p style={{ marginTop: 12 }}>
        Logado como: <b>{email ?? "…"}</b>
