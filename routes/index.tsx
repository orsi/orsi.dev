import { Head } from "$fresh/runtime.ts";
import ParticleCanvas from "../islands/ParticleCanvas.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <html class="dark" />
        <body class="overflow-x-hidden font-mono dark:bg-gray-800 dark:text-gray-200" />
      </Head>
      <main>
        <h1>Orsi</h1>
        <ParticleCanvas />
      </main>
    </>
  );
}
