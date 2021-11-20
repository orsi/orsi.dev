import "~/style/index.css";
import React from "react";
import * as FaviconService from "~/services/favicon.service.ts";
import { AutomataService } from "~/services/automata.service.ts";
import styles from "~/style/classes.module.css";
import projects from "~/data/projects.ts";

export default function Index() {
  const automataRef = React.useRef<HTMLDivElement>(null);
  let automataService: AutomataService | null = null;
  React.useEffect(() => {
    if (automataRef.current !== null) {
      automataService = new AutomataService(
        automataRef.current,
        true,
      );
      automataService.start();
    }

    return () => {
      automataService?.destroy();
      automataService = null;
    };
  }, [automataRef]);

  React.useEffect(() => {
    FaviconService.start();
  });

  return (
    <>
      <head>
        <title>Jonathon Orsi</title>
        <meta name="description" content="Jonathon Orsi's Homepage." />
        <meta name="keywords" content="alephjs,react,framework,deno" />
      </head>
      <div
        ref={automataRef}
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: 0,
        }}
      >
      </div>
      <main
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <header>
            <h1>Jonathon Orsi</h1>
            <ul>
              <li>
                <a
                  href="https://github.com/orsi"
                  target="_blank"
                  rel="noreferrer"
                >
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jonorsi/"
                  target="_blank"
                  rel="noreferrer"
                >
                </a>
              </li>
              <li>
                <a href="mailto:jonathon.orsi@gmail.com">
                </a>
              </li>
            </ul>
          </header>
          <div
            id="about"
            style={{
              marginTop: "32px",
            }}
          >
            <h2>About Me</h2>
            <p>
              I design and develop web applications, digital art showcases, and
              experimental tools. I have 7 years of professional experience
              working with{" "}
              <a href="https://thrillworks.com" target="_blank">
                Thrillworks
              </a>
              ,{" "}
              <a href="https://bombardier.com" target="_blank">
                Bombardier Inc.
              </a>
              , and freelancing.
            </p>
            <p>
              When I am not programming, I compose music, design sound, mix, and
              master audio for all media. You may also see me performing in{" "}
              <a target="_blank" href="https://jojogun.ca">
                JoJo Gun & the Bullets
              </a>
              . You can listen to my original music and compositions on{" "}
              <a target="_blank" href="https://orsi.bandcamp.com/">
                bandcamp.
              </a>
            </p>
            <p>I live in Toronto, Ontario, Canada.</p>
          </div>

          <div
            id="development"
            style={{
              marginTop: "32px",
            }}
          >
            <h2>View Work</h2>

            {projects && (
              <ul className={styles.test}>
                {projects.map((project, i) => {
                  return (
                    <li key={i} id={project.id}>
                      <a href={project.href} target="_blank">
                        <img src={project.imageSrc} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
