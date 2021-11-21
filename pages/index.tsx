import "~/style/index.css";
import React from "react";
import * as FaviconService from "~/services/favicon.service.ts";
import { AutomataService } from "~/services/automata.service.ts";
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
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: 0,
        }}
      >
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "24px 0",
        }}
      >
        <header>
          <h1>Jonathon Orsi</h1>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
            }}
          >
            <li>
              <a
                href="https://github.com/orsi"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 1024 1024"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li style={{ marginLeft: "16px " }}>
              <a
                href="https://www.linkedin.com/in/jonorsi/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  height="24"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin"
                  className="svg-inline--fa fa-linkedin fa-w-14"
                  role="img"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
            </li>
            <li style={{ marginLeft: "16px " }}>
              <a href="mailto:jonathon.orsi@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="svg-inline--fa fa-envelope fa-w-16"
                  role="img"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  />
                </svg>
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
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gridGap: "24px",
                alignItems: "center",
              }}
            >
              {projects.map((project, i) => {
                return (
                  <li key={i}>
                    <a href={project.href} target="_blank">
                      <img src={project.imageSrc} alt={project.imageAlt} />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
