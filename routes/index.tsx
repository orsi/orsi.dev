/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Background from "../islands/Background.tsx";
import data from "../data/page-data.tsx";

export default function Home() {
  const getRandomBackgroundDiv = () => {
    const sides = Math.floor(Math.random() * 3) + 3;
    let points = ``;
    for (let i = 0; i < sides; i++) {
      points += `${(Math.random() * 100)},${(Math.random() * 100)} `;
    }
    const scale = Math.random() + 1.2;
    const red = Math.floor(Math.random() * 205) + 50;
    const green = Math.floor(Math.random() * 205) + 50;
    const blue = Math.floor(Math.random() * 205) + 50;
    const getRandomTranslation = () => {
      return `translate(${Math.random() * 6 - 3} ${Math.random() * 6 - 3})`;
    };
    const getRandomOpacity = () => `${Math.random() * .4 + .2}`;
    return (
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class={tw`w-full h-full overflow-visible transform scale-[${scale}]`}
      >
        <polygon
          fill={`rgba(${red},0,0,${getRandomOpacity()})`}
          points={points}
        />
        <polygon
          fill={`rgba(0,${green},0,${getRandomOpacity()})`}
          transform={getRandomTranslation()}
          points={points}
        />
        <polygon
          fill={`rgba(0,0,${blue},${getRandomOpacity()})`}
          transform={getRandomTranslation()}
          points={points}
        />
      </svg>
    );
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/global.css" />
        <html class={tw`dark`} />
        <body
          class={tw
            `overflow-x-hidden font-mono dark:bg-gray-800 dark:text-gray-200`}
        />
      </Head>
      <Background />
      <main
        class={tw
          `container mx-auto p-6 relative z-1 min-h-screen h-full flex flex-col justify-center`}
      >
        <header>
          <h1 class={tw`sr-only`}>Jon Orsi</h1>
          <div class={tw`flex flex-col md:flex-row gap-6`}>
            <div class={tw`flex-none`}>
              <img
                src={data.logo}
                width="150"
                height="150"
                class={tw`max-w-[150px] w-full h-auto rounded-full`}
              />
              <ul class={tw`flex justify-between`}>
                {data.socials.map((social, index: number) => {
                  const marginTop = `mt-[${
                    (data.socials.length * 12) - (index * 12)
                  }px]`;
                  return (
                    <li key={social.title} class={tw`${marginTop}`}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class={tw`flex-1 relative flex items-center p-8`}>
              <div
                class={tw
                  `bg-gray-900 bg-opacity-50 absolute top-2/4 left-2/4 transform  -translate-2/4 skew-y-[-9deg] w-full h-full z-1`}
              />
              <p class={`relative z-2`}>
                {data.about}
              </p>
            </div>
          </div>
        </header>

        <section class={tw`relative z-10 mt-20`}>
          <iframe
            style="border-radius:12px"
            src="https://open.spotify.com/embed/artist/1tSaSVwi5i2ZJfOYbomSnM?utm_source=generator"
            width="100%"
            height="200"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          >
          </iframe>
        </section>
        <section class={tw`mt-20`}>
          <ul
            class={tw
              `grid grid-cols-1 gap-12 md:grid-cols-2 md:grid-flow-dense lg:grid-cols-3`}
          >
            {data.works.map((work, index: number) => (
              <li
                key={work.title}
                class={tw`relative z-1`}
              >
                <div
                  class={tw
                    `absolute z-[-1] top-2/4 left-2/4 transform -translate-2/4 w-full h-full`}
                >
                  {getRandomBackgroundDiv()}
                </div>
                <div class={tw`relative z-2`}>
                  <h2 class={tw`uppercase text-xl font-bold`}>
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {work.title}
                      {` `}&rarr;
                    </a>
                  </h2>
                  {work.description && (
                    <p class={tw`relative z-2`}>
                      {work.description}
                    </p>
                  )}
                </div>
                <div class={tw`relative z-2`}>
                  {work.image && (
                    <img
                      src={work.image}
                      alt={work.imageDescription ?? ""}
                      width="320"
                      class={tw`rounded-md max-w-[320px] w-full mt-2`}
                    />
                  )}
                  {work.svg}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
