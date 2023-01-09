export default function Development() {
  return (
    <section className={`text-right`}>
      <h2 className={`mt-8 text-2xl`}>Development</h2>
      <ul className={`text-sm`}>
        <li className={`mt-2`}>
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
        </li>
        <li className={`mt-2`}>
          <a href="https://jojogun.ca" target="_blank" rel="noreferrer">
            Jo Jo Gun & the Bullets
          </a>
          <p>Marketing site</p>
        </li>
        <li className={`mt-2`}>
          <a href="https://code-x.live" target="_blank" rel="noreferrer">
            Code X
          </a>
          <p>Web audio digital poem</p>
        </li>
        <li className={`mt-2`}>
          <a
            href="https://humblerootsmedia.com"
            target="_blank"
            rel="noreferrer"
          >
            Humble Roots Media
          </a>
          <p>Marketing site</p>
        </li>
        <li className={`mt-2`}>
          <a href="https://betical.digital" target="_blank" rel="noreferrer">
            Betical
          </a>
          <p>Digital poem</p>
        </li>
      </ul>
    </section>
  );
}
