/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "$fresh/runtime.ts";
import Container from "../islands/Container.tsx";
import AboutSection from "../islands/AboutSection.tsx";
import ProjectList from "../islands/ProjectList.tsx";
import ContactList from "../islands/ContactList.tsx";
import pageData from "../data/page-data.json" assert {
  type: "json",
};
import contactData from "../data/contact.json" assert {
  type: "json",
};

const AppCSS = `
@font-face {
    font-family: "BitCasual";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    size-adjust: 109.65%;
    src: url("/BitCasual.woff2") format("woff2"),
        url("/BitCasual.woff") format("woff"),
        url("/BitCasual.ttf") format("truetype");
    /* By https://twitter.com/neurofuzzy */
}

:root {
    --primary-colour: #eee;
    --secondary-colour: #aaa;
    --background-colour: #111;
    --accent-colour: #bed;
}

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

body {
    background-color: var(--background-colour);
    color: var(--primary-colour);
    font-family: 'BitCasual', 'Times New Roman', Times, serif;
    font-size: 22px;
    font-weight: 300;
    padding-bottom: 64px;
    margin: 0;
}

.container {
    margin: 0 auto;
    max-width: 320px;
}

.gutter {
    padding: 0 30px;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    color: var(--accent-colour);
    display: inline-block;
    min-height: 50px;
}

a>svg {
    fill: currentColor;
}

p>a {
    min-height: auto;
}
`;
export default function Home() {
  return (
    //   <Helmet>
    //   <title>Jonathon Orsi</title>
    //   <meta name="description" content="Jonathon Orsi's website" />
    // </Helmet>
    <Container>
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
    </Container>
  );
}
