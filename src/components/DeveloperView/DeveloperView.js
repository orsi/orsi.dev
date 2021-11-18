import React from 'react';
import styled from 'styled-components';
import imageChip8c from '../../assets/chip8c.gif';
import imageJojoGun from '../../assets/project-jojogun-960w.gif';
import imageADarkRoom from '../../assets/adarkroom.jpg';
import imageCodeX from '../../assets/project-code-x.gif';
import imageBetical from '../../assets/project-betical.gif';
import imageHumbleRootsMedia from '../../assets/project-humble-roots-media.gif';
import imageUltimaXna from '../../assets/ultimaxna.gif';
import PaperMountainLogo from '../PaperMountainLogo/PaperMountainLogo';
import DenoLogo from '../DenoLogo/DenoLogo';
import ZenHtmlLogo from '../ZenHtmlLogo/ZenHtmlLogo';

const projects = [
  {
    title: 'Chip-8C',
    href: 'https://github.com/orsi/chip8c',
    imageSrc: imageChip8c,
    tech: ['C/C++', 'SDL2'],
  },
  {
    title: 'Jojo Gun & the Bullets',
    href: 'https://jojogun.ca',
    imageSrc: imageJojoGun,
    tech: ['HTML', 'CSS', 'Javascript', 'SASS', 'React'],
  },
  {
    id: 'a-dark-room',
    title: 'A Dark Room',
    href: 'https://orsi.github.io/adarkroom',
    imageSrc: imageADarkRoom,
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
    imageSrc: imageCodeX,
  },
  {
    id: 'deno',
    title: 'Deno',
    href: 'https://deno.land/',
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
    imageSrc: imageBetical,
  },
  {
    title: 'Humble Roots Media',
    href: 'http://humblerootsmedia.com',
    imageSrc: imageHumbleRootsMedia,
  },
  {
    title: 'UltimaXNA',
    href: 'https://github.com/ZaneDubya/UltimaXNA',
    imageSrc: imageUltimaXna,
    tech: ['C#', 'XNA Framework'],
  },
];

const ProjectsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 512px) {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 0 0 33.333%;
      max-height: 240px;
    }
    a {
      align-items: center;
      display: flex;
      height: 100%;
      opacity: 0.7;
      transition: opacity 300ms ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;
const ProjectsListItem = styled.li`
  padding: 8px;
  overflow: hidden;
`;
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
      <ProjectsList>
        {projects.map((project, i) => {
          return (
            <ProjectsListItem key={i} id={project.id}>
              <a href={project.href} target="_blank">
                {project.isSvg ? project.svg() : <img src={project.imageSrc} />}
              </a>
            </ProjectsListItem>
          );
        })}
      </ProjectsList>
    </div>
  );
}
