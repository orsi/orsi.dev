import { Helmet } from "react-helmet-async";
import { tw } from "../twind/twind.ts";

export default function JonsTuner() {
  return (
    <main
      className={tw(
        `container mx-auto p-6 relative z-1 min-h-screen h-full flex flex-col justify-center`
      )}
    >
      <header>
        <h1 className={tw(`text-xl`)}>Jon's Tuner</h1>
      </header>

      <section className={tw(`relative z-10 mt-10`)}>
        <h2 className={tw(`text-lg font-bold`)}>Privacy Policy</h2>
        <p className={tw(`text-sm`)}>
          Jon's Tuner records audio from your microphone to analyze and display
          musical note and frequency information. All recorded audio never
          leaves your device and is not saved.
        </p>
      </section>
    </main>
  );
}
