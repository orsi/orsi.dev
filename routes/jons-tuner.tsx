/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Background from "../islands/Background.tsx";

export default function PrivacyPage() {
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
          <h1 class={tw`text-xl`}>Jon's Tuner</h1>
        </header>

        <section class={tw`relative z-10 mt-10`}>
          <h2 class={tw`text-lg font-bold`}>Privacy Policy</h2>
          <p class={tw`text-sm`}>
            Jon's Tuner records audio from your microphone to analyze and
            display musical note and frequency information. All recorded audio
            never leaves your device and is not saved.
          </p>
        </section>
      </main>
    </>
  );
}
