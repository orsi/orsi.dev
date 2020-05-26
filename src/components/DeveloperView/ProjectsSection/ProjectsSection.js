import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import PaperMountainPost from './project-paper-mountain-post.svg';
import imageBetical from '../../../assets/project-betical.gif';
import imageCodeX from '../../../assets/project-code-x.gif';
import imageHumbleRootsMedia from '../../../assets/project-humble-roots-media.gif';
import imageJojoGun from '../../../assets/project-jojogun-960w.gif';
import imageDiscworld from '../../../assets/project-discworld-360w.gif';
import imageEmojiland from '../../../assets/project-emojiland-360w.gif';

const ProjectsSectionContainer = styled.section``;
const ResponsiveFlexBox = styled.div`
@media (min-width: 1081px) {
    align-items: center;
    display: flex;
}
`;
const ResponsiveFlexBoxReversed = styled(ResponsiveFlexBox)`
flex-direction: row-reverse;
`;
const ProjectsList = styled.ul`
list-style: none;
margin: 0;
margin-top: 32px;
padding: 0;
`;
const ProjectsListItem = styled.li`
&:not(:first-of-type) {
    margin-top: 96px;
}

`;
const ProjectMedia = styled.div`
display: flex;
font-size: 0;
justify-content: center;
margin: 0 auto;

img {
    border-radius: 4px;
    overflow: hidden;
}

${ResponsiveFlexBox} & {
    max-width: 300px;
    @media (min-width: 1081px) {
        flex: 0 0 300px;
        padding-right: 16px;
    }
}
${ResponsiveFlexBoxReversed} & {
    @media (min-width: 1081px) {
        padding-right: 0;
        padding-left: 16px;
    }
}

#paper-mountain-post & {
    .sky {
        fill:#7dcccc;
    }

    .mountain {
        fill:#eba396;
        stroke: #22222f;
        stroke-width: 1px;
        transform: translate(-22px, 0);
        -webkit-animation: mountainRise 10s ease-in-out infinite;
        animation: mountainRise 10s ease-in-out infinite;
        
        @keyframes mountainRise {
            from {
                transform: translate(-22px, 0) rotate(0);
            }
            50% {
                transform: translate(-22px, 10px) rotate(1deg);
            }
            to {
                transform: translate(-22px, 0) rotate(0);
            }
        }
    }
    .border {
        fill: transparent;
        stroke: #22222f;
        stroke-width: 64px;
    }
}

#code-x & {
    flex: 0 0 240px;
    max-width: 240px;
}

#deno & {
    flex: 0 0 240px;
    max-width: 240px;

    svg {
        fill: currentColor;
    }
    .deno-eyes {
        animation: denoBlink 5s step-end infinite;
    }
    @keyframes denoBlink {
        0%, 90% {
            opacity: 1;
        }
        92% {
            opacity: 0;
        }
        94% {
            opacity: 1;
        }
        98% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
}
`;
const ProjectContent = styled.div`
${ProjectsListItem} & {
    margin-top: 16px;
}
`;
const ProjectTitle = styled.h3`
font-family: 'IBM Plex Mono', sans-serif;
line-height: 1;
margin: 0 0 8px 0;
`;
const ProjectTime = styled.small``;
const ProjectDescription = styled.article`
text-align: justify;
`;
const ProjectButton = styled.a`
align-items: center;
color: inherit;
display: flex;
font-size: 13.3px;
font-variant: small-caps;
margin-top: 16px;
opacity: .8;
text-decoration: none;
text-transform: uppercase;
span {
    margin-left: 16px;
}
&:hover {
    opacity: 1;
}
`;
const Code = styled.span`
color: #53CA49;
display: inline;
font-family: monospace;
font-weight: 900;
`;
export default function ProjectsSection() {
    return (
        <ProjectsSectionContainer>
            <ProjectsList>
                <ProjectsListItem id="jojogun">
                    <ProjectMedia>
                        <img src={imageJojoGun} />
                    </ProjectMedia>
                    <ProjectContent>
                        <ProjectTitle>JoJo Gun & the Bullets</ProjectTitle>
                        <ProjectTime>MAY 2020</ProjectTime>
                        <ProjectDescription>
                            <p>A creative "glitch" landing page for Hamilton-based rock band Jojo Gun & the Bullets to direct fans to their social media and music catalogue. Created in React, random glitches happen to elements as you watch.</p>
                        </ProjectDescription>
                        <ProjectButton href="https://www.jojogun.ca"
                            target="_blank"
                            className="project-button">
                            <FaExternalLinkAlt></FaExternalLinkAlt>
                            <span>visit jojogun</span>
                        </ProjectButton>
                    </ProjectContent>
                </ProjectsListItem>
                <ProjectsListItem id="paper-mountain-post">
                    <ResponsiveFlexBoxReversed id="boo">
                        <ProjectMedia>
                            <PaperMountainPost />
                        </ProjectMedia>
                        <ProjectContent>
                            <ProjectTitle>Paper Mountain Post</ProjectTitle>
                            <ProjectTime>FEB 2020</ProjectTime>
                            <ProjectDescription>
                                <p>A post production film company based in Los Angeles and Toronto. They wanted a design that made them stand out from other often bland and similar film production websites they would be compared to. I redesigned and built a custom Squarespace template that they could easily modify text blocks, services, team members, and works from.</p>
                            </ProjectDescription>
                            <ProjectButton href="https://papermountainpostltd.com"
                                target="_blank"
                                className="project-button">
                                <FaExternalLinkAlt></FaExternalLinkAlt>
                                <span>visit paper mountain</span>
                            </ProjectButton>
                        </ProjectContent>
                    </ResponsiveFlexBoxReversed>
                </ProjectsListItem>
                <ProjectsListItem id="code-x">
                    <ResponsiveFlexBox>
                        <ProjectMedia>
                            <img src={imageCodeX}></img>
                        </ProjectMedia>
                        <ProjectContent>
                            <ProjectTitle>Code X</ProjectTitle>
                            <ProjectTime>JAN 2020</ProjectTime>
                            <ProjectDescription>
                                <p>An interactive exploration of text, image and sound. Conceptualized in 1999 during a residency at the Visual Studies Workshop in Rochester, New York by <a href="https://www.wmarksutherland.com/code-x" target="_blank">W. Mark Sutherland</a>. Orginally coded in Adobe Flash, Mark reached out to develop a newer version of Code X built with supported technology. I recreated Code X for the browser using the Web Audio API.</p>
                            </ProjectDescription>

                            <ProjectButton href="https://code-x.live"
                                target="_blank"
                                className="project-button">
                                <FaExternalLinkAlt></FaExternalLinkAlt>
                                <span>experiment with code x</span>
                            </ProjectButton>
                        </ProjectContent>
                    </ResponsiveFlexBox>
                </ProjectsListItem>
                <ProjectsListItem id="deno">
                    <ResponsiveFlexBoxReversed>
                        <ProjectMedia>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024.000000 1024.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                                </metadata>
                                <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M4720 9174 c-19 -2 -80 -9 -135 -14 -782 -82 -1552 -413 -2180 -939
                                -116 -96 -380 -360 -476 -476 -520 -621 -824 -1318 -936 -2143 -25 -183 -25
                                -801 0 -984 112 -825 416 -1522 936 -2143 96 -116 360 -380 476 -476 621 -520
                                1318 -824 2143 -936 183 -25 801 -25 984 0 825 112 1522 416 2143 936 116 96
                                380 360 476 476 520 621 824 1318 936 2143 25 183 25 801 0 984 -112 825 -416
                                1522 -936 2143 -96 116 -360 380 -476 476 -619 518 -1323 826 -2137 935 -88
                                12 -216 17 -453 19 -181 2 -346 1 -365 -1z m50 -432 c0 -117 8 -371 19 -612 6
                                -118 13 -287 16 -375 11 -312 44 -1131 49 -1204 l5 -73 -45 5 c-25 2 -48 8
                                -52 11 -3 4 -10 73 -14 154 -18 356 -77 1737 -83 1939 l-6 222 28 4 c15 2 40
                                5 56 6 l27 1 0 -78z m957 24 c1 -1 4 -303 7 -671 4 -369 9 -700 12 -736 3 -37
                                2 -69 -3 -71 -4 -3 -29 -3 -54 0 l-46 4 -7 291 c-4 161 -9 339 -11 397 -8 177
                                -15 778 -9 793 4 11 15 12 57 5 29 -6 53 -11 54 -12z m-2313 -335 c6 -9 53
                                -560 111 -1281 19 -245 38 -469 41 -497 5 -51 4 -53 -28 -73 -18 -11 -36 -20
                                -40 -20 -3 0 -9 26 -12 58 -14 130 -68 758 -106 1212 -22 267 -42 506 -45 532
                                -5 44 -4 48 22 62 32 17 50 20 57 7z m2753 -201 c28 -10 31 -15 37 -72 10
                                -100 7 -578 -4 -578 -29 0 -89 34 -94 53 -3 12 -6 154 -6 315 0 325 -4 306 67
                                282z m-1847 -47 c0 -27 7 -176 15 -333 8 -157 17 -356 21 -442 7 -174 9 -168
                                -58 -172 -33 -1 -33 -1 -35 49 -2 28 -7 115 -13 195 -5 80 -17 253 -25 385 -8
                                132 -18 263 -21 291 -6 50 -5 52 22 62 16 6 44 11 62 11 32 1 32 1 32 -46z
                                m2774 -137 l34 -14 7 -134 c3 -73 5 -231 3 -350 l-3 -218 -42 21 -42 20 -3
                                332 c-2 183 -1 338 1 345 4 15 4 15 45 -2z m-1826 -131 c6 -6 20 -491 21 -737
                                l1 -148 -47 7 c-27 3 -49 6 -50 7 -3 2 -33 743 -33 815 l0 74 51 -6 c29 -4 54
                                -9 57 -12z m2303 -71 c12 -14 14 -233 17 -1441 3 -1387 3 -1423 -15 -1423 -11
                                0 -26 6 -35 13 -15 11 -17 132 -22 1317 -4 718 -9 1370 -12 1449 l-6 144 29
                                -21 c17 -12 36 -29 44 -38z m-897 -205 c5 -4 10 -61 11 -126 5 -221 6 -1576 1
                                -1580 -2 -2 -20 3 -40 11 l-36 15 0 851 0 850 28 -6 c15 -4 31 -10 36 -15z
                                m-2760 -56 c3 -27 8 -88 11 -138 3 -49 10 -161 16 -248 12 -176 10 -187 -47
                                -187 -30 0 -34 3 -38 33 -10 59 -45 551 -40 559 5 7 57 25 81 27 6 1 14 -20
                                17 -46z m-1654 -255 c11 -106 33 -328 49 -493 17 -165 31 -305 31 -311 0 -12
                                -77 -50 -85 -42 -5 5 -105 890 -105 930 0 24 77 125 87 114 3 -2 13 -91 23
                                -198z m3921 -105 l29 -17 1 -216 c1 -118 3 -250 3 -293 2 -90 -9 -105 -63 -86
                                l-31 11 0 86 c0 48 -3 187 -7 310 l-6 222 23 0 c12 0 35 -8 51 -17z m-3482
                                -388 c18 -192 47 -516 66 -720 l34 -370 -39 -39 -38 -39 -7 79 c-4 44 -24 248
                                -45 454 -21 206 -51 505 -66 664 l-28 288 39 36 c35 33 39 34 46 16 4 -10 21
                                -176 38 -369z m-749 -121 c22 -197 80 -721 130 -1164 50 -443 97 -870 106
                                -950 8 -80 22 -201 30 -270 14 -117 14 -125 -2 -137 -24 -18 -34 -16 -34 5 0
                                9 -9 85 -20 167 -18 137 -48 369 -115 890 -14 105 -41 314 -60 465 -20 151
                                -49 376 -65 500 -16 124 -43 336 -60 473 -18 136 -29 257 -26 270 7 27 66 121
                                72 115 2 -3 22 -166 44 -364z m-306 -431 c15 -120 43 -339 62 -488 19 -148 43
                                -333 54 -410 l19 -140 -21 -18 c-12 -10 -24 -14 -28 -10 -4 4 -12 44 -18 88
                                -6 44 -43 301 -83 570 l-71 490 23 68 c12 37 25 67 28 67 4 0 19 -98 35 -217z
                                m5490 131 c14 -14 16 -76 16 -535 l0 -519 -28 0 c-61 0 -60 -15 -64 553 l-3
                                517 32 0 c17 0 39 -7 47 -16z m-2189 -179 c226 -34 423 -97 618 -197 126 -65
                                186 -110 326 -244 208 -199 336 -373 456 -619 175 -358 243 -675 329 -1525 39
                                -381 90 -1072 101 -1355 3 -82 10 -217 16 -300 11 -176 24 -152 -131 -227
                                -215 -104 -422 -176 -695 -243 -334 -82 -550 -108 -880 -109 l-240 -1 2 115
                                c0 63 6 210 12 325 30 557 24 1260 -15 1650 -22 224 -65 496 -89 556 -5 13 18
                                24 117 58 181 63 338 142 362 181 43 74 -34 180 -132 180 -17 0 -68 -18 -115
                                -39 -224 -103 -673 -224 -932 -251 -179 -19 -457 -8 -650 27 -105 19 -293 90
                                -450 171 -181 94 -292 219 -325 367 -18 80 -13 240 10 330 25 99 95 243 159
                                327 285 375 873 700 1476 814 192 36 464 40 670 9z m3085 -31 c36 -15 40 -19
                                40 -53 2 -273 -4 -897 -9 -923 -1 -9 -53 -10 -75 -2 -14 5 -16 59 -16 500 0
                                316 4 494 10 494 5 0 28 -7 50 -16z m437 -549 l36 -15 -7 -828 c-8 -1055 -9
                                -1086 -47 -1177 -62 -149 -59 -179 -53 475 2 327 7 658 9 735 2 77 4 294 5
                                483 0 228 3 342 10 342 6 0 27 -7 47 -15z m-6014 -249 c6 -81 4 -89 -25 -153
                                l-32 -68 -12 100 c-19 160 -19 167 19 191 17 12 35 20 38 18 3 -2 9 -42 12
                                -88z m-618 -603 c9 -82 79 -626 115 -893 54 -413 58 -472 34 -447 -3 3 -26
                                142 -50 309 -156 1078 -155 1071 -142 1079 27 18 36 8 43 -48z m720 -458 c6
                                -25 35 -296 35 -329 0 -28 -36 -54 -52 -38 -5 5 -18 90 -28 188 -11 99 -22
                                202 -25 229 l-6 50 35 -40 c20 -22 38 -49 41 -60z m807 -377 c11 -10 18 -50
                                27 -158 15 -195 17 -180 -24 -180 -42 0 -41 -3 -55 173 -14 179 -14 177 13
                                177 13 0 30 -6 39 -12z m792 -15 c2 -10 7 -70 11 -133 3 -63 12 -205 20 -315
                                28 -404 29 -455 12 -455 -19 0 -21 15 -43 300 -8 118 -23 304 -33 413 -9 109
                                -15 200 -12 202 11 12 40 3 45 -12z m-1880 -192 c6 -9 44 -329 91 -766 14
                                -132 28 -259 31 -283 l5 -43 -25 16 c-19 13 -26 26 -26 49 0 63 -43 478 -76
                                732 -19 144 -34 271 -34 283 0 21 24 29 34 12z m5771 -418 l-7 -418 -25 -37
                                c-57 -84 -54 -100 -51 368 l2 429 37 38 c20 20 40 37 44 37 3 0 3 -188 0 -417z
                                m-925 -663 c5 -581 4 -626 -12 -644 -10 -11 -19 -18 -22 -15 -7 8 -17 1275 -9
                                1282 4 4 14 6 23 5 13 -3 16 -74 20 -628z m-3266 398 c7 -62 32 -359 42 -499
                                6 -94 6 -97 -16 -104 -12 -4 -26 -3 -30 2 -7 7 -29 229 -56 571 l-7 82 31 0
                                c29 0 31 -2 36 -52z m-786 -350 c7 -7 12 -32 12 -57 0 -26 12 -161 25 -301 38
                                -383 41 -435 24 -425 -26 15 -49 38 -44 44 2 4 -2 54 -10 111 -7 58 -16 152
                                -20 210 -4 58 -13 164 -21 235 -19 175 -18 195 4 195 10 0 23 -5 30 -12z m473
                                -673 c3 -22 9 -104 13 -182 7 -150 4 -161 -37 -130 -12 9 -20 47 -32 161 -21
                                206 -22 198 17 194 29 -3 33 -7 39 -43z"/>
                                    <path className="deno-eyes" d="M3184 5756 c-104 -45 -112 -186 -14 -236 71 -36 143 -19 180 43 70
                                114 -44 246 -166 193z"/>
                                    <path className="deno-eyes" d="M3862 5660 c-96 -59 -96 -201 0 -260 95 -57 218 18 218 132 0 110
                                -126 184 -218 128z"/>
                                </g>
                            </svg>

                        </ProjectMedia>
                        <ProjectContent>

                            <ProjectTitle>Deno</ProjectTitle>
                            <ProjectTime>APRIL 2019</ProjectTime>
                            <ProjectDescription>
                                <p><a href="https://deno.land/" target="_blank">Deno</a> is a JavaScript/TypeScript runtime built on V8, Rust, and Tokio. Deno aims to be a productive and secure scripting environment for the modern programmer from the creator of NodeJS, Ryan Dahl. I initiated the <a href="https://github.com/denoland/deno/commits?author=jorsi" target="_blank">Rust and Typescript TLS features</a>.</p>
                            </ProjectDescription>

                            <ProjectButton href="https://deno.land"
                                target="_blank"
                                className="project-button">
                                <FaExternalLinkAlt></FaExternalLinkAlt>
                                <span>check out the Deno project</span>
                            </ProjectButton>
                        </ProjectContent>
                    </ResponsiveFlexBoxReversed>
                </ProjectsListItem>
                <ProjectsListItem id="discworld">
                    <ResponsiveFlexBox>
                        <ProjectMedia>
                            <img src={imageDiscworld} />
                        </ProjectMedia>
                        <ProjectContent>

                            <ProjectTitle>Discworld</ProjectTitle>
                            <ProjectTime>MAR 2018</ProjectTime>
                            <ProjectDescription>
                                <p>A browser based procedural discworld generator using cellular automaton, perlin noise, elevation, temperature, and precipitation maps to create a variety of 'biomes' that colour the landscape. Create a new discworld by typing <Code>/destroy</Code>, and then <Code>/create seed width height</Code>, where seed is any non-space phrase, and width and height are numbers (150-300 is ideal, any more will severely impact performance). You can zoom in and out with the mouse scroll wheel and move around by right-clicking the mouse in any direction.</p>
                            </ProjectDescription>

                            <ProjectButton href="https://jonorsi.com/discworld/"
                                target="_blank"
                                className="project-button">
                                <FaExternalLinkAlt></FaExternalLinkAlt>
                                <span>create a discworld</span>
                            </ProjectButton>
                        </ProjectContent>
                    </ResponsiveFlexBox>
                </ProjectsListItem>
                <ProjectsListItem id="emojiland">
                    <ResponsiveFlexBoxReversed>
                        <ProjectMedia>
                            <img src={imageEmojiland} />
                        </ProjectMedia>
                        <ProjectContent>

                            <ProjectTitle>Emojiland</ProjectTitle>
                            <ProjectTime>DEC 2017</ProjectTime>
                            <ProjectDescription>
                                <p>Inspired by Dwarf Fortress, one of the most complex simulation games made, I wanted to learn about procedural generation, perlin noise, and graphics rendering. Users can explore the map, generate a new world, and chat with other users on screen. Right-click the mouse button in the direction you want to walk, type and press enter to chat, and type <Code>/generate hello world</Code> to make a new map (replace 'hello world' with different phrases for different maps). Built in Typescript using NodeJS, socket.io, and browserify.</p>
                            </ProjectDescription>

                            <ProjectButton href="https://jonorsi.com/emojiland/"
                                target="_blank"
                                className="project-button">
                                <FaExternalLinkAlt></FaExternalLinkAlt>
                                <span>explore emojiland</span>
                            </ProjectButton>
                        </ProjectContent>
                    </ResponsiveFlexBoxReversed>
                </ProjectsListItem>
                <ProjectsListItem id="betical">
                    <ResponsiveFlexBox>
                        <ProjectMedia>
                            <img src={imageBetical} />
                        </ProjectMedia>
                        <ProjectContent>
                            <ProjectTitle>Betical</ProjectTitle>
                            <ProjectTime>APRIL 2017</ProjectTime>
                            <ProjectDescription>
                                <p>A born-digital paragraph generator composed with remixed typed assemblage-letters by Dani Spinosa of <a href="https://genericpronoun.com/" target="_blank">Generic Pronoun</a>. A randomly generated combination of letters turn into words, words into paragraphs, and the reader is left with the impression of a familiar language.</p>
                            </ProjectDescription>
                            <ProjectButton href="https://jonorsi.com/betical"
                                target="_blank"
                                className="project-button">
                                <FaExternalLinkAlt></FaExternalLinkAlt>
                                <span>experience betical</span>
                            </ProjectButton>
                        </ProjectContent>
                    </ResponsiveFlexBox>
                </ProjectsListItem>
                <ProjectsListItem id="humble-roots-media">
                    <ProjectMedia>
                        <img src={imageHumbleRootsMedia} />
                    </ProjectMedia>
                    <ProjectContent>
                        <ProjectTitle>Humble Roots Media</ProjectTitle>
                        <ProjectTime>MAY 2014</ProjectTime>
                        <ProjectDescription>
                            <p>A digital content creator for businesses and corporations. They wanted a redesign of their website to better reflect their business personality and needed someone who could work with them to implement their vision. Built on Wordpress, I developed a new theme template and presented their beautiful cinemagraphs front and center.</p>
                        </ProjectDescription>
                        <ProjectButton href="https://www.humblerootsmedia.com"
                            target="_blank"
                            className="project-button">
                            <FaExternalLinkAlt></FaExternalLinkAlt>
                            <span>visit humble roots media</span>
                        </ProjectButton>
                    </ProjectContent>
                </ProjectsListItem>
            </ProjectsList>
        </ProjectsSectionContainer>
    );
}