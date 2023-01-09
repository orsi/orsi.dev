export default function JonsTuner() {
  return (
    <main
      className={`container mx-auto p-6 relative z-1 min-h-screen h-full flex flex-col justify-center`}
    >
      <header>
        <h1 className={`text-xl`}>Jon{`'`}s Tuner</h1>
      </header>

      <section className={`relative z-10 mt-10`}>
        <h2 className={`text-lg font-bold`}>Privacy Policy</h2>
        <p className={`text-sm`}>
          Jon{`'`}s Tuner records audio from your microphone to analyze and
          display musical note and frequency information. All recorded audio
          never leaves your device and is not saved.
        </p>
      </section>
    </main>
  );
}
