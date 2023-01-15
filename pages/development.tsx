import Head from "next/head";
import Image from "next/image";
import jonsTunerImage from "../public/jons-tuner.png";
import placeholderImage from "../public/placeholder.jpg";

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
      <main className={`container mx-auto px-8`}>
        <section className={`flex mt-8`}>
          <div className={`w-1/3`}>
            <Image
              src={jonsTunerImage}
              alt="Jon's Tuner"
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
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
        <section className={`flex mt-8`}>
          <div className={`w-1/3`}>
            <Image
              src={placeholderImage}
              alt=""
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
            <a href="https://jojogun.ca" target="_blank" rel="noreferrer">
              Jo Jo Gun & the Bullets
            </a>
            <p>Marketing site</p>
          </div>
        </section>
        <section className={`flex mt-8`}>
          <div className={`w-1/3`}>
            <Image
              src={placeholderImage}
              alt=""
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
            <a href="https://code-x.sectionve" target="_blank" rel="noreferrer">
              Code X
            </a>
            <p>Web audio digital poem</p>
          </div>
        </section>
        <section className={`flex mt-8`}>
          <div className={`w-1/3`}>
            <Image
              src={placeholderImage}
              alt=""
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
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
        <section className={`flex mt-8`}>
          <div className={`w-1/3`}>
            <Image
              src={placeholderImage}
              alt=""
              placeholder="blur"
              height={300}
            />
          </div>
          <div className={`ml-4`}>
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
