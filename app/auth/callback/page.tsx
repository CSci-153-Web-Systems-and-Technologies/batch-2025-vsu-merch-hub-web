import { Suspense } from "react";
import CallBackClient from "./CallBackClient";

export const dynamic = "force-dynamic"; // helps avoid static prerender issues

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm">Signing you in…</div>}>
      <CallBackClient />
    </Suspense>
  );
}
