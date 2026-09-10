// ─── Next.js API Proxy — /api/vehicles/[id] ───────────────────────────────────

import { getBackendUrl } from "@/lib/config";

export async function GET(request, { params }) {
  const apiUrl = getBackendUrl();
  const { id } = await params;

  try {
    const res = await fetch(`${apiUrl}/vehicles/${id}`, { cache: "no-store" });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return Response.json(
        { error: data.detail || "Vehicle not found." },
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
