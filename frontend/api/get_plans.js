const BACKEND_URL =
  process.env.BACKEND_GET_PLANS_URL ||
  "https://ekasit-tech.infinityfree.me/api/get_plans.php";

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET, OPTIONS");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const upstream = await fetch(BACKEND_URL, {
      headers: {
        Accept: "application/json",
        "User-Agent": "ekasit-tech-vercel-proxy",
      },
    });

    const contentType = upstream.headers.get("content-type") || "";
    const body = await upstream.text();

    response.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");

    if (!upstream.ok) {
      response.status(upstream.status).json({
        error: "Backend request failed",
        status: upstream.status,
      });
      return;
    }

    if (!contentType.includes("application/json")) {
      response.status(502).json({
        error: "Backend did not return JSON",
        preview: body.slice(0, 200),
      });
      return;
    }

    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.status(200).send(body);
  } catch (error) {
    response.status(502).json({
      error: "Unable to reach backend API",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
