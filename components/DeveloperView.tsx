import styles from '~/style/classes.module.css';
import React from 'react';
import PaperMountainLogo from '~/components/PaperMountainLogo.tsx';
import DenoLogo from '~/components/DenoLogo.tsx';
import ZenHtmlLogo from '~/components/ZenHtmlLogo.tsx';

const projects = [
  {
    title: 'Chip-8C',
    href: 'https://github.com/orsi/chip8c',
    imageSrc: '/chip8c.gif',
    tech: ['C/C++', 'SDL2'],
  },
  {
    title: 'Jojo Gun & the Bullets',
    href: 'https://jojogun.ca',
    imageSrc: '/project-jojogun-960w.gif',
    tech: ['HTML', 'CSS', 'Javascript', 'SASS', 'React'],
  },
  {
    id: 'a-dark-room',
    title: 'A Dark Room',
    href: 'https://orsi.github.io/adarkroom',
    imageSrc: '/adarkroom.jpg',
    tech: ['Rust', 'Python', 'Typescript'],
  },
  {
    id: 'paper-mountain-post',
    title: 'Paper Mountain Post',
    href: 'https://papermountainpostltd.com',
    svg: PaperMountainLogo,
    isSvg: true,
    tech: ['HTML', 'CSS', 'Javascript', 'SquareSpace'],
  },
  {
    title: 'Code X',
    href: 'https://code-x.live',
    imageSrc: '/project-code-x.gif',
  },
  {
    id: 'deno',
    title: 'Deno',
    href: 'https://github.com/denoland/deno/commit/045e74bb39d7743b774cfd2b889bc6ce1e1ad245',
    svg: DenoLogo,
    isSvg: true,
    tech: ['Rust', 'Python', 'Typescript'],
  },
  {
    id: 'zen-html',
    title: 'zenHTML',
    href: 'https://github.com/orsi/zen-html',
    svg: ZenHtmlLogo,
    isSvg: true,
    tech: ['Typescript', ''],
  },
  {
    title: 'Betical',
    href: 'https://orsi.dev/betical/',
    imageSrc: '/project-betical.gif',
  },
  {
    title: 'Humble Roots Media',
    href: 'http://humblerootsmedia.com',
    imageSrc: '/project-humble-roots-media.gif',
  },
  {
    title: 'UltimaXNA',
    href: 'https://github.com/ZaneDubya/UltimaXNA',
    imageSrc: '/ultimaxna.gif',
    tech: ['C#', 'XNA Framework'],
  },
];

export default function Development() {
  return (
    <div
      id="development"
      style={{
        marginTop: '32px',
      }}
    >
      <h2>Online Work</h2>

      {/* <ProjectsSection></ProjectsSection> */}
      {projects && (
      <ul className={styles.test}>
        {projects.map((project, i) => {
          return (
            <li key={i} id={project.id}>
              <a href={project.href} target="_blank">
                {project.isSvg ? project.svg() : <img src={project.imageSrc} />}
              </a>
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
}
