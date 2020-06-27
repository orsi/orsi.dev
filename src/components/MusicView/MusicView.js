import React from 'react';
import styled from 'styled-components';
import DarkRoomImage from '../../assets/adarkroom.jpg';

const MusicViewContainer = styled.section`
align-items: center;
display: flex;
min-height: 100%;
margin: 0 -32px;
@media (min-width:1081px) {
    margin: 0;
}
`;
const MusicList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
margin: 0;
margin-top: 32px;
padding: 0;
`;
const MusicListItem = styled.li`
flex: 0 0 100%;
&:not(:first-of-type) {
    margin-top: 32px;
}

h2 {
    color: #fe7eaf;
    font-size: 18px;
    margin: 0 0 16px 0;
}
p {
    margin-top: 16px;
}
`;
const ResponsiveYoutubeContainer = styled.div`
position: relative;
padding-bottom: 56.25%;
padding-top: 30px;
height: 0;
overflow: hidden;
& iframe, 
& object, 
& embed {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
`;
const ResponsiveBandcampContainer = styled.div`
position: relative;
overflow: hidden;
font-size: 0;
& iframe, 
& object, 
& embed {
    border: none;
    width: 100%;
}
`;

export default function MusicView() {
    return (
        <MusicViewContainer>
            <div>
                <h1>Music and Sound Design</h1>
                <p>20 years of experience performing and creating music. From lofi beats, chiptune, orchestral arrangements to ambient soundscapes and user interface sound effects.</p>
                <p>All audio and music were produced and mixed by myself unless otherwise noted.</p>

                <MusicList>
                    <MusicListItem>

                        <h2>Beats to Study and Drive To</h2>
                        <p>Coming Soon.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Cell Drive</h2>
                        <p>Coming Soon.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>A Dark Room</h2>
                        <img src={DarkRoomImage} />
                        <p>Immersion defines this unique text adventure game. I added an audio engine and crafted minimalist ambient tracks for each area, sound effects for the UI, and leitmotifs for each event and world location after learning the code for it was open sourced.</p>
                        <p>Play the game <a href="https://orsi.github.io/adarkroom/" target="_blank">here</a>.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Westworld Scoring Competition</h2>
                        <ResponsiveYoutubeContainer>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Ae3a2k8xAEs"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </ResponsiveYoutubeContainer>
                        <p>My entry into the Westworld Scoring Competition hosted by Spitfire Audio. A combination of futuristic synth arpeggios with classic orchestral textures to enhance the suspense of this high energy car chase. Sound effects and dialogue were provided by HBO and Spitfire Audio.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Virtuaverse Apartment Scene Rescoring</h2>
                        <ResponsiveYoutubeContainer>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/kJyRSvX__0M"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </ResponsiveYoutubeContainer>
                        <p>An environmental sound effect rescore I created for the apartment scene in the retro VirtuaVerse pixel game.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Role Playing Pizza Game</h2>
                            <iframe style={{
                                border: 0,
                                width: '100%',
                                height: '373px'
                            }} src="https://bandcamp.com/EmbeddedPlayer/album=2906715428/size=large/bgcol=333333/linkcol=fe7eaf/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/role-playing-pizza-game">Role Playing Pizza Game by Jonathon Orsi</a></iframe>
                        <p>My soundtrack for a creative and imaginative game about delivering pizzas to the citizens of a the underworld via an interdimensional elevator.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Thomas the Rocket Engine</h2>
                        <iframe style={{
                            border: 0,
                            width: '100%',
                            height: '120px'
                        }}
                        src="https://bandcamp.com/EmbeddedPlayer/track=2247218558/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/track/thomas-the-rocket-engine">Thomas the Rocket Engine by Jonathon Orsi</a></iframe>
                        <p>Commisioned piece for an instagram ad honouring Thomas the Tank Engine's 75th birthday.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Oddities</h2>
                            <iframe style={{
                                border: 0,
                                width: '100%',
                                height: '280px'
                            }} src="https://bandcamp.com/EmbeddedPlayer/album=1438955147/size=large/bgcol=333333/linkcol=fe7eaf/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/oddities">Oddities by Jonathon Orsi</a></iframe>
                        <p>A small showcase collection of original songs. Various genres include lofi hip hop, 80s pop, orchestral, and ambient.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Sol Survivor</h2>
                            <iframe style={{
                                border: 0,
                                width: '100%',
                                height: '245px'
                            }}
                            src="https://bandcamp.com/EmbeddedPlayer/album=3353210599/size=large/bgcol=333333/linkcol=fe7eaf/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/sol-survivor">Sol Survivor by Jonathon Orsi</a></iframe>
                        <p>UI sound effects and ambient tracks for the mobile game Sol Survivor.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>UnLeeched</h2>
                            <iframe style={{
                                border: 0,
                                width: '100%',
                                height: '280px'
                            }}
                            src="https://bandcamp.com/EmbeddedPlayer/album=3032009350/size=large/bgcol=333333/linkcol=fe7eaf/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/unleeched">UnLeeched by Jonathon Orsi</a></iframe>
                        <p>Sound effects and game soundtrack created in a 72 hours for the Ludum Dare 46 game challenge. You can view and play the game <a href="https://ldjam.com/events/ludum-dare/46/unleeched" target="_blank">here</a>.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Battle Bits</h2>
                            <iframe style={{
                                border: 0,
                                width: '100%',
                                height: '245px'
                            }}
                            src="https://bandcamp.com/EmbeddedPlayer/album=3706494023/size=large/bgcol=333333/linkcol=fe7eaf/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/battle-bits">Battle Bits by Jonathon Orsi</a></iframe>
                        <p>Various chiptune sketches for battle scenes.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Jojo Gun & the Bullets</h2>
                        <iframe src="https://open.spotify.com/embed/artist/6FavMhIklkpnPvpF1BCBTw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>My band of almost 15 years, playing originals and covers for the people. Vocals, guitar since 2006.</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>The Dirty Rumours</h2>
                        <ResponsiveYoutubeContainer>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/zOHUfhNQsoc"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </ResponsiveYoutubeContainer>
                        <p>Toronto's best Fleetwood Mac Rumour's album tribute band active during 2012-2013. I played lead Lindsey Buckingham (lead guitar).</p>

                    </MusicListItem>
                    <MusicListItem>

                        <h2>Gooding Jones and the Overtones</h2>
                        <ResponsiveYoutubeContainer>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/NTwNTUZiuTk"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </ResponsiveYoutubeContainer>
                        <p>The funkiest, grooviest, motowniest Toronto band to come out of the lower west side Toronto. Lead guitarist and vocalist from 2008 to 2010.</p>

                    </MusicListItem>
                </MusicList>
            </div>
        </MusicViewContainer>
    );
}