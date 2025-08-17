export default {
  fetch(req) {
    const ip = req.headers.get("cf-connecting-ip") || "";
    return new Response(ip, {
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  },
};