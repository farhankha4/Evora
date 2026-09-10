// ─── Next.js API Proxy — /api/vehicles ────────────────────────────────────────

import { getBackendUrl } from "@/lib/config";

export async function GET() {
  const apiUrl = getBackendUrl();

  try {
    const res = await fetch(`${apiUrl}/vehicles`, { cache: "no-store" });
    const data = await res.json().catch(() => ([]));

    if (!res.ok) {
      return Response.json(
        { error: "Failed to fetch vehicles from backend." },
        { status: res.status }
      );
    }

    return Response.json(data);
  } catch (err) {
    return Response.json(
      { error: `Cannot reach backend server at ${apiUrl}. ${err.message}` },
      { status: 503 }
    );
  }
}
