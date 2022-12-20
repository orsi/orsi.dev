import { Head } from "$fresh/runtime.ts";

export default function JonsTuner() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/global.css" />
        <html class="dark" />
        <body
          class="overflow-x-hidden font-mono dark:bg-gray-800 dark:text-gray-200"
        />
      </Head>
      <main
        class="container mx-auto p-6 relative z-1 min-h-screen h-full flex flex-col justify-center"
      >
        <header>
          <h1 class="text-xl">Jon's Tuner</h1>
        </header>

        <section class="relative z-10 mt-10">
          <h2 class="text-lg font-bold">Privacy Policy</h2>
          <p class="text-sm">
            Jon's Tuner records audio from your microphone to analyze and
            display musical note and frequency information. All recorded audio
            never leaves your device and is not saved.
          </p>
        </section>
      </main>
    </>
  );
}
