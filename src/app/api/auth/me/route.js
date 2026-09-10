// ─── Next.js API Proxy — /api/auth/me ─────────────────────────────────────────

import { getBackendUrl } from "@/lib/config";

export async function GET(request) {
  const apiUrl = getBackendUrl();
  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return Response.json({ error: "Missing authorization token." }, { status: 401 });
  }

  try {
    const res = await fetch(`${apiUrl}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: authHeader,
      },
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return Response.json(
        { error: data.detail || "Failed to fetch user profile." },
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
