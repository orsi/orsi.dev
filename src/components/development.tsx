import { tw } from "../twind/twind.ts";

export default function Development() {
  return (
    <section className={tw(`text-right`)}>
      <h2 className={tw(`mt-8 text-2xl`)}>Development</h2>
      <ul className={tw(`text-sm`)}>
        <li className={tw(`mt-2`)}>
          Jon's Tuner (
          <a
            href="https://apps.apple.com/sg/app/jons-tuner/id1641018281"
            target="_blank"
          >
            iOs
          </a>{" "}
          -{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.orsi.jonstuner"
            target="_blank"
          >
            Android
          </a>
          )<p>Mobile chromatic tuner app</p>
        </li>
        <li className={tw(`mt-2`)}>
          <a href="https://jojogun.ca" target="_blank">
            Jo Jo Gun & the Bullets
          </a>
          <p>Marketing site</p>
        </li>
        <li className={tw(`mt-2`)}>
          <a href="https://code-x.live" target="_blank">
            Code X
          </a>
          <p>Web audio digital poem</p>
        </li>
        <li className={tw(`mt-2`)}>
          <a href="https://humblerootsmedia.com" target="_blank">
            Humble Roots Media
          </a>
          <p>Marketing site</p>
        </li>
        <li className={tw(`mt-2`)}>
          <a href="https://betical.digital" target="_blank">
            Betical
          </a>
          <p>Digital poem</p>
        </li>
      </ul>
    </section>
  );
}
