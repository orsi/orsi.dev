import { serve } from "https://deno.land/std@0.137.0/http/server.ts";
import { renderToString } from "https://deno.land/x/jsx@v0.1.5/mod.ts";
import { HTML } from "./src/app.tsx";

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/styles.css")) {
    const file = await Deno.readFile("./src/styles.css");
    return new Response(file, {
      headers: {
        "content-type": "text/css",
      },
    });
  } else {
    const html = await renderToString(HTML);
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
}

serve(handleRequest);
