// ─── Next.js API Proxy — /api/admin/bookings ──────────────────────────────────

import { getBackendUrl } from "@/lib/config";

export async function GET(request) {
  const apiUrl = getBackendUrl();
  const authHeader = request.headers.get("authorization");

  try {
    const res = await fetch(`${apiUrl}/admin/bookings`, {
      headers: { Authorization: authHeader || "" },
      cache: "no-store",
    });

    const data = await res.json().catch(() => ([]));
    if (!res.ok) {
      return Response.json(
        { error: data.detail || "Failed to fetch admin bookings." },
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
