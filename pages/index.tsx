import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Development from "../components/development";
import Music from "../components/music";
import ThreeJsBackground from "../components/three-js-background";
import ThreeJsGlitchText from "../components/three-js-glitch-text";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>ORSI</title>
        <meta name="description" content="ORSI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThreeJsBackground />
      <main className={`relative z-10`}>
        <ThreeJsGlitchText />
        <div className={`mt-2 max-w-[640px] mx-auto px-4`}>
          <p>
            Jonathon Orsi is a musician and software developer living in
            Toronto, Canada.
          </p>
          <p>
            Contact me via <a href="mailto:jonathon.orsi@gmail.com">email</a>.
          </p>
        </div>
        <div className={`max-w-[640px] mx-auto px-4 flex flex-col sm:flex-row`}>
          <div className={`sm:w-1/2`}>
            <Music />
          </div>
          <div className={`sm:w-1/2`}>
            <Development />
          </div>
        </div>
      </main>
    </>
  );
}
