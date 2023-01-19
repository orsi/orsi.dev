import Head from "next/head";
import Image from "next/image";
import spotifyOrsiImage from "../public/spotify-orsi.jpeg";
import aDarkRoomImage from "../public/a-dark-room.gif";

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
      <main className={`container max-w-[680px] mx-auto px-8`}>
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div>
            <Image
              src={spotifyOrsiImage}
              alt="Orsi on Spotify"
              placeholder="blur"
              height={180}
            />
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
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
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div>
            <iframe
              className={`max-w-full`}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Bat Boy - Kickstarter Trailer (EN)"
              src="https://www.youtube.com/embed/LTzBi80VsVs?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.evadermusic.com&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=5"
            ></iframe>
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
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
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div>
            <Image
              src={aDarkRoomImage}
              alt="A Dark Room"
              // placeholder="blur"
              height={300}
            />
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
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
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div>
            <iframe
              className={`max-w-full`}
              src="https://www.youtube.com/embed/PWqtYzFY1OY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
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
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div>
            <iframe
              className={`max-w-full`}
              src="https://www.youtube.com/embed/qyxRwAroYrI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
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
