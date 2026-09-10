// ─── Evora Configuration Utility ─────────────────────────────────────────────
// Dynamically resolves the backend FastAPI server URL across production (Vercel/Render)
// and local development environments.
//
// ────────────────────────────────────────────────────────────────────────────

export function getBackendUrl() {
  const url =
    process.env.FASTAPI_URL ||
    process.env.NEXT_PUBLIC_FASTAPI_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "https://evora-backend-wthe.onrender.com";

  return url.replace(/\/$/, "");
}
