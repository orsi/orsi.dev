import Head from "next/head";
import Image from "next/image";
import spotifyOrsiImage from "../public/spotify-orsi.jpeg";
import placeholderImage from "../public/placeholder.jpg";

export default function Music() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>/music | ORSI</title>
        <meta name="description" content="ORSI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={`sr-only`}>Music</h1>
      <main className={`container mx-auto px-8`}>
        <section className={`flex mt-8`}>
          <div className={`w-1/3`}>
            <Image
              src={spotifyOrsiImage}
              alt="Orsi on Spotify"
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
            <a
              href="https://open.spotify.com/artist/1tSaSVwi5i2ZJfOYbomSnM?si=WMIVm-7xR6-COWBbjNPnFg"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
            <p>Original music</p>
          </div>
        </section>
        <section className={`flex mt-8`}>
          <div className={`flex-none w-1/3`}>
            <Image
              src={placeholderImage}
              alt="Placeholder"
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
            <a
              href="https://store.steampowered.com/app/1709350/Bat_Boy/"
              target="_blank"
              rel="noreferrer"
            >
              Bat Boy
            </a>
            <p>Audio SFX</p>
          </div>
        </section>
        <section className={`flex mt-8`}>
          <div className={`flex-none w-1/3`}>
            <Image
              src={placeholderImage}
              alt="Placeholder"
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
            <a
              href="https://adarkroom.doublespeakgames.com"
              target="_blank"
              rel="noreferrer"
            >
              A Dark Room
            </a>
            <p>Soundtrack and Audio SFX</p>
          </div>
        </section>
        <section className={`flex mt-8`}>
          <div className={`w-1/3`}>
            <Image
              src={placeholderImage}
              alt="Placeholder"
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
            <a
              href="https://store.steampowered.com/app/1941370/Dancin_Divas/"
              target="_blank"
              rel="noreferrer"
            >
              Dancin{`'`} Divas
            </a>
            <p>Soundtrack</p>
          </div>
        </section>
        <section className={`flex mt-8`}>
          <div className={`w-1/3`}>
            <Image
              src={placeholderImage}
              alt="Placeholder"
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
            <a
              href="https://store.steampowered.com/app/2081860/The_Van_Game/"
              target="_blank"
              rel="noreferrer"
            >
              A Van Game
            </a>
            <p>Soundtrack</p>
          </div>
        </section>
      </main>
    </>
  );
}
