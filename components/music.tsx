export default function Music() {
  return (
    <section className={``}>
      <h2 className={`mt-8 text-2xl`}>Music</h2>
      <ul className={`text-sm`}>
        <li className={`mt-2`}>
          <a
            href="https://open.spotify.com/artist/1tSaSVwi5i2ZJfOYbomSnM?si=WMIVm-7xR6-COWBbjNPnFg"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>
          <p>Original music</p>
        </li>
        <li className={`mt-2`}>
          <a
            href="https://store.steampowered.com/app/1709350/Bat_Boy/"
            target="_blank"
            rel="noreferrer"
          >
            Bat Boy
          </a>
          <p>Audio SFX</p>
        </li>
        <li className={`mt-2`}>
          <a
            href="https://adarkroom.doublespeakgames.com"
            target="_blank"
            rel="noreferrer"
          >
            A Dark Room
          </a>
          <p>Soundtrack and Audio SFX</p>
        </li>
        <li className={`mt-2`}>
          <a
            href="https://store.steampowered.com/app/1941370/Dancin_Divas/"
            target="_blank"
            rel="noreferrer"
          >
            Dancin{`'`} Divas
          </a>
          <p>Soundtrack</p>
        </li>
        <li className={`mt-2`}>
          <a
            href="https://store.steampowered.com/app/2081860/The_Van_Game/"
            target="_blank"
            rel="noreferrer"
          >
            A Van Game
          </a>
          <p>Soundtrack</p>
        </li>
      </ul>
    </section>
  );
}
