"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) router.replace("/dashboard");
    });

    (async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData.session) router.replace("/dashboard");
      else router.replace("/login");
    })();

    return () => data.subscription.unsubscribe();
  }, [router]);

  return (
    <main style={{ padding: 32, fontFamily: "system-ui" }}>
      <h1>Conectando…</h1>
      <p>Finalizando login.</p>
    </main>
  );
}
