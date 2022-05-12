import { serve } from "https://deno.land/std@0.137.0/http/server.ts";
import { renderToString } from "https://deno.land/x/jsx@v0.1.5/mod.ts";
import { HTML } from "./src/app.tsx";

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);
  console.log(`Request for: ${pathname}`);

  if (pathname !== "/") {
    try {
      const file = await Deno.readFile(`./src/static/${pathname}`);
      return new Response(file, {
        headers: {
          "content-type": "text/css",
        },
      });
    } catch (error) {
      // file doesn't exist
      // console.log(`No file exists: ./src/static${pathname}`);
    }
  }

  let html = await renderToString(HTML);
  html = `<!DOCTYPE html>${html}`;
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

serve(handleRequest);
