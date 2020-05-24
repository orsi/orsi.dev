import React from 'react';
import styled from 'styled-components';

const ResponsiveYoutubeContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    & iframe, 
    & object, 
    & embed {
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
    & iframe, 
    & object, 
    & embed {
        border: none;
        width: 100%;
        max-width: 400px;
    }
`;

export default class MusicView extends React.Component {
    render() {
        return (
            <div className="MusicView">
                <section>
                    <p>Custom music, sound design, and a programmer who can implement audio.</p>
                </section>
                <ResponsiveYoutubeContainer>
                    <iframe width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Ae3a2k8xAEs"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ResponsiveYoutubeContainer>
                <ResponsiveYoutubeContainer>
                    <iframe width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kJyRSvX__0M"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ResponsiveYoutubeContainer>

                <ResponsiveBandcampContainer>
                    <iframe style={{
                        height: '373px'
                    }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=2906715428/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
                        seamless>
                        <a href="http://orsi.bandcamp.com/album/role-playing-pizza-game">Role Playing Pizza Game by Jonathon Orsi</a>
                    </iframe>
                </ResponsiveBandcampContainer>

                <ResponsiveBandcampContainer>
                    <iframe style={{
                        height: '241px'
                    }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=3353210599/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/sol-survivor">Sol Survivor by Jonathon Orsi</a></iframe>
                </ResponsiveBandcampContainer>

                <ResponsiveBandcampContainer>
                    <iframe style={{
                        height: '274px'
                    }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=1438955147/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/oddities">Oddities by Jonathon Orsi</a></iframe>
                </ResponsiveBandcampContainer>

                <ResponsiveBandcampContainer>
                    <iframe style={{
                        height: '274px'
                    }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=3032009350/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/unleeched">UnLeeched by Jonathon Orsi</a></iframe>

                </ResponsiveBandcampContainer>

                <ResponsiveBandcampContainer>
                    <iframe style={{
                        height: '241px'
                    }}
                        src="https://bandcamp.com/EmbeddedPlayer/album=3706494023/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/battle-bits">Battle Bits by Jonathon Orsi</a></iframe>
                </ResponsiveBandcampContainer>

            </div>
        );
    }
}