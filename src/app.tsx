/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "https://deno.land/x/jsx@v0.1.5/mod.ts";
import { About } from "./components/about.tsx";
import { Projects } from "./components/projects.tsx";
import { SocialList } from "./components/SocialList.tsx";
export const HTML = (
  <html>
    <head>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <header>
        <div class="container gutter">
          <h1>Jonathon Orsi</h1>
          <SocialList />
        </div>
      </header>
      <main>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
      </main>
    </body>
  </html>
);
