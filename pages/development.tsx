import Head from "next/head";
import Image from "next/image";
import jonsTunerImage from "../public/jons-tuner.png";
import joJoGunCaImage from "../public/jojogun-ca.png";
import codeXLiveImage from "../public/code-x-live.png";
import humbleRootsMediaComImage from "../public/humblerootsmedia-com.png";
import beticalDigitalImage from "../public/betical-digital.png";

export default function Development() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>/development | ORSI</title>
        <meta name="description" content="ORSI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={`sr-only`}>Development</h1>
      <main className={`container max-w-[740px] mx-auto px-8`}>
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div>
            <Image
              src={jonsTunerImage}
              alt="Jon's Tuner"
              placeholder="blur"
              height={180}
            />
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
            Jon{`'`}s Tuner (
            <a
              href="https://apps.apple.com/sg/app/jons-tuner/id1641018281"
              target="_blank"
              rel="noreferrer"
            >
              iOs
            </a>{" "}
            -{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.orsi.jonstuner"
              target="_blank"
              rel="noreferrer"
            >
              Android
            </a>
            )<p>Mobile chromatic tuner app</p>
          </div>
        </section>
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div className={`sm:flex-none sm:w-2/3`}>
            <Image
              className={`rounded-lg`}
              src={joJoGunCaImage}
              alt=""
              placeholder="blur"
            />
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
            <a href="https://jojogun.ca" target="_blank" rel="noreferrer">
              Jo Jo Gun & the Bullets
            </a>
            <p>Marketing site</p>
          </div>
        </section>
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div className={`sm:flex-none sm:w-2/3`}>
            <Image
              className={`rounded-lg`}
              src={codeXLiveImage}
              alt=""
              placeholder="blur"
            />
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
            <a href="https://code-x.live" target="_blank" rel="noreferrer">
              Code X
            </a>
            <p>Web audio digital poem</p>
          </div>
        </section>
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div className={`sm:flex-none sm:w-2/3`}>
            <Image
              className={`rounded-lg`}
              src={humbleRootsMediaComImage}
              alt=""
              placeholder="blur"
            />
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
            <a
              href="https://humblerootsmedia.com"
              target="_blank"
              rel="noreferrer"
            >
              Humble Roots Media
            </a>
            <p>Marketing site</p>
          </div>
        </section>
        <section className={`flex flex-col sm:flex-row mt-12`}>
          <div className={`sm:flex-none sm:w-2/3`}>
            <Image
              className={`rounded-lg`}
              src={beticalDigitalImage}
              alt=""
              placeholder="blur"
            />
          </div>
          <div className={`mt-8 sm:mt-0 sm:ml-4`}>
            <a href="https://betical.digital" target="_blank" rel="noreferrer">
              Betical
            </a>
            <p>Digital poem</p>
          </div>
        </section>
      </main>
    </>
  );
}
