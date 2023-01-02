import { tw } from "../twind/twind.ts";

export default function Music() {
  return (
    <section className={tw(``)}>
      <h2 className={tw(`mt-8 text-2xl`)}>Music</h2>
      <ul className={tw(`text-sm`)}>
        <li className={tw(`mt-2`)}>
          <a
            href="https://open.spotify.com/artist/1tSaSVwi5i2ZJfOYbomSnM?si=WMIVm-7xR6-COWBbjNPnFg"
            target="_blank"
          >
            Spotify
          </a>
          <p>Original music</p>
        </li>
        <li className={tw(`mt-2`)}>
          <a
            href="https://store.steampowered.com/app/1709350/Bat_Boy/"
            target="_blank"
          >
            Bat Boy
          </a>
          <p>Audio SFX</p>
        </li>
        <li className={tw(`mt-2`)}>
          <a href="https://adarkroom.doublespeakgames.com" target="_blank">
            A Dark Room
          </a>
          <p>Soundtrack and Audio SFX</p>
        </li>
        <li className={tw(`mt-2`)}>
          <a
            href="https://store.steampowered.com/app/1941370/Dancin_Divas/"
            target="_blank"
          >
            Dancin' Divas
          </a>
          <p>Soundtrack</p>
        </li>
        <li className={tw(`mt-2`)}>
          <a
            href="https://store.steampowered.com/app/2081860/The_Van_Game/"
            target="_blank"
          >
            A Van Game
          </a>
          <p>Soundtrack</p>
        </li>
      </ul>
    </section>
  );
}
