import '~/style/index.css';
import { useDeno } from 'aleph/react'
import React from 'react'
import * as FaviconService from '~/services/favicon.service.ts';
import Automata from '~/components/Automata.tsx';
import DeveloperView from '~/components/DeveloperView.tsx';

export default function Home() {
  const version = useDeno(() => Deno.version.deno)

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
    <main>
      <div id="background">
        <Automata></Automata>
      </div>
      <div>
        <header>
          <h1>Jonathon Orsi</h1>
          <ul>
            <li>
              <a href="https://github.com/orsi" target="_blank" rel="noreferrer">
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jonorsi/" target="_blank" rel="noreferrer">
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
            marginTop: '32px',
          }}
        >
          <h2>About Me</h2>
          <p>
            I design and develop web applications, digital art showcases, and
            experimental tools. I have 7 years of professional experience working with{' '}
            <a href="https://thrillworks.com" target="_blank">
              Thrillworks
            </a>
            ,{' '}
            <a href="https://bombardier.com" target="_blank">
              Bombardier Inc.
            </a>
            , and freelancing.
          </p>
          <p>
            When I am not programming, I compose music, design sound, mix, and
            master audio for all media. You may also see me performing in{' '}
            <a target="_blank" href="https://jojogun.ca">
              JoJo Gun & the Bullets
            </a>
            . You can listen to my original music and compositions on{' '}
            <a target="_blank" href="https://orsi.bandcamp.com/">
              bandcamp.
            </a>
          </p>
          <p>I live in Toronto, Ontario, Canada.</p>
        </div>
        <DeveloperView />
      </div>
    </main>
    </>
    
  )
}
