// ─── Next.js API Proxy — /api/auth/login ──────────────────────────────────────

import { getBackendUrl } from "@/lib/config";

export async function POST(request) {
  const apiUrl = getBackendUrl();

  try {
    const body = await request.json();

    const res = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return Response.json(
        { error: data.detail || "Invalid login credentials." },
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
