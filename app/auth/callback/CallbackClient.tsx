"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function CallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const run = async () => {
      const code = searchParams.get("code");
      const next = searchParams.get("next") ?? "/";

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          console.error(error);
          router.replace("/login?error=auth_callback");
          return;
        }
      }

      router.replace(next);
    };

    run();
  }, [router, searchParams]);

  return (
    <main className="min-h-screen grid place-items-center">
      <p className="text-sm text-gray-600">Signing you in…</p>
    </main>
  );
}
