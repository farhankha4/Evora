// ─── Next.js API Proxy — /api/payments/create-order ───────────────────────────

import { getBackendUrl } from "@/lib/config";

export async function POST(request) {
  const apiUrl = getBackendUrl();
  const authHeader = request.headers.get("authorization");

  try {
    const body = await request.json();
    const res = await fetch(`${apiUrl}/payments/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader || "",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return Response.json(
        { error: data.detail || "Failed to create payment order." },
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
