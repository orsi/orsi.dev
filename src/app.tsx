/** @jsx h */
import { h } from "https://deno.land/x/jsx@v0.1.5/mod.ts";
import { AboutSection } from "./components/AboutSection.tsx";
import { ProjectList } from "./components/ProjectList.tsx";
import { ContactList } from "./components/ContactList.tsx";
import pageData from "../data/page-data.json" assert {
  type: "json",
};
import contactData from "../data/contact.json" assert {
  type: "json",
};
const decoder = new TextDecoder("utf-8");
const styles = decoder.decode(await Deno.readFile("./src/static/styles.css"));

export const HTML = (
  <html lang="en">
    <head>
      <meta name="description" content="Jonathon Orsi's website" />
      <meta name="viewport" content="width=device-width" />
      <title>Jonathon Orsi</title>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </head>
    <body>
      <header>
        <div class="container gutter">
          <h1>Jonathon Orsi</h1>
          <ContactList links={contactData.contact.links} />
        </div>
      </header>
      <main>
        <div class="container gutter">
          <section>
            <AboutSection />
          </section>
          <section>
            <ProjectList projects={pageData["index.html"].projects} />
          </section>
        </div>
      </main>
    </body>
  </html>
);
