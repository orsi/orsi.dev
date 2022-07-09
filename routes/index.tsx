/** @jsx h */
/** @jsxFrag Fragment */
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Fragment, h } from "preact";
import Background from "../islands/Background.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <Background />
      <main
        class={tw
          `relative z-1 min-h-screen flex h-full justify-center items-center`}
      >
        <h1>Jon Orsi</h1>
      </main>
    </>
  );
}
