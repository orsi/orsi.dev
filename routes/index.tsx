import { Head } from "$fresh/runtime.ts";
import Canvas from "../islands/Canvas.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <html class="dark" />
        <body class="overflow-x-hidden font-mono dark:bg-gray-800 dark:text-gray-200" />
      </Head>
      <main>
        <Canvas />
      </main>
    </>
  );
}
