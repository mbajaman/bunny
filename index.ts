import figlet from "figlet";

const server = Bun.serve({
    port: 2000,
    fetch(req) {
      return new Response(figlet.textSync("Bun!"));
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);