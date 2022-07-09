/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Background from "../islands/Background.tsx";
import data from "../data/page-data.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <Background />
      <main
        class={tw
          `container mx-auto p-4 relative z-1 min-h-screen h-full flex flex-col justify-center`}
      >
        <header>
          <h1 class={tw`sr-only`}>Jon Orsi</h1>
          <div class={tw`flex`}>
            <img src={data.logo} width="150" height="150" />
            <ul class={tw`flex flex-col ml-4 justify-between`}>
              {data.socials.map((social) => (
                <li key={social.title}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <section class={tw`mt-8`}>
          <p>
            I am a software developer with 8 years of professional experience in
            web technologies. When I am not programming, I compose music, design
            sound, mix, and master audio for all media. You may also see me
            performing in{" "}
            <a target="_blank" href="https://jojogun.ca">
              JoJo Gun &amp; the Bullets
            </a>. You can listen to my original music and compositions on{" "}
            <a target="_blank" href="https://orsi.bandcamp.com/">bandcamp.</a>
          </p>
          <p class={tw`mt-8`}>I live in Toronto, Ontario, Canada.</p>
        </section>
        <section class={tw`mt-8`}>
          <iframe
            style="border-radius:12px"
            src="https://open.spotify.com/embed/artist/1tSaSVwi5i2ZJfOYbomSnM?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          >
          </iframe>
        </section>
        <section class={tw`mt-8`}>
          <h2>Works</h2>
          <ul
            class={tw
              `mt-4 md:grid md:grid-cols-2 md:grid-flow-dense md:gap-8 2xl:grid-cols-3`}
          >
            {data.works.map((work, index) => (
              <li
                key={work.title}
                class={tw`${index === 1 ? `row-span-2` : ``}`}
              >
                <div>
                  <h2>
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class={tw
                        `text-blue-300 border border-0 border-b border-blue-300`}
                    >
                      {work.title}
                      <span class={tw`ml-2`}>&rarr;</span>
                    </a>
                  </h2>
                  {work.description}
                </div>
                <img src={work.image} class={tw`w-full mt-4`} />
              </li>
            ))}
          </ul>
        </section>
        <section class={tw`mt-8`}>
          <h2>Projects</h2>
          <ul
            class={tw
              `mt-4 md:grid md:grid-cols-2 md:grid-flow-dense md:gap-8 2xl:grid-cols-3`}
          >
            {data.projects.map((project, index) => (
              <li
                key={project.title}
                class={tw`${index === 1 ? `row-span-2` : ``}`}
              >
                <div>
                  <h2>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class={tw
                        `text-blue-300 border border-0 border-b border-blue-300`}
                    >
                      {project.title}
                      <span class={tw`ml-2`}>&rarr;</span>
                    </a>
                  </h2>
                  {project.description}
                </div>
                {project.image && (
                  <img src={project.image} class={tw`w-full mt-4`} />
                )}
                {project.svg}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
