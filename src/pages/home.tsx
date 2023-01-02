import Development from "../components/development.tsx";
import Music from "../components/music.tsx";
import ThreeJsGlitchText from "../components/three-js-glitch-text.tsx";
import { tw } from "../twind/twind.ts";

export default function Home() {
  return (
    <main className={tw(`pb-8`)}>
      <ThreeJsGlitchText />
      <div className={tw(`mt-2 max-w-[640px] mx-auto px-4`)}>
        <p className={tw(`text-center`)}>
          Jonathon Orsi is a musician and software developer living in Toronto,
          Canada.
        </p>
      </div>
      <div className={tw(`max-w-[640px] mx-auto px-4 flex flex-col sm:flex-row`)}>
        <div className={tw(`sm:w-1/2`)}>
          <Music />
        </div>
        <div className={tw(`sm:w-1/2`)}>
          <Development />
        </div>
      </div>
    </main>
  );
}
