Bun.serve({
  port: 3000,
  routes: {
    "/search": new Response("Hello, world"),
  },
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});
