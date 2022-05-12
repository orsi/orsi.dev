/** @jsx h */
/** @jsxFrag Fragment */
import {
  h,
  Helmet,
  renderSSR,
} from "https://deno.land/x/nano_jsx@v0.0.30/mod.ts";
import { serve } from "https://deno.land/std@0.137.0/http/server.ts";
import { App } from "./src/app.tsx";

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);
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

  const ssr = renderSSR(<App />);
  const { body, head, footer } = Helmet.SSR(ssr);
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      ${head.join("\n")}
    </head>
    <body>
      ${body}
      ${footer.join("\n")}
    </body>
  </html>`;
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

serve(handleRequest);
