import React from 'react';
import styled from 'styled-components';

const MusicViewContainer = styled.section`
align-items: center;
display: flex;
min-height: 100%;
margin: 0 -32px;
@media (min-width:1081px) {
    margin: 0;
}
`;
const MusicDescription = styled.p``;
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
const YoutubeList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
margin: 0;
padding: 0;
@media (min-width: 1081px) {
    margin: 0 -8px;
}
`;
const YoutubeListItem = styled.li`
flex: 0 0 100%;
&:not(:first-of-type) {
    margin-top: 16px;
}
@media (min-width: 1081px) {
    flex: 0 0 50%;   
    padding: 8px;
    &:not(:first-of-type) {
        margin-top: 0;
    }  
}
`;
const BandcampList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
margin: 0;
margin-top: 16px;
padding: 0;
@media (min-width: 1081px) {
    margin: 0 -8px;
}
`;
const BandcampListItem = styled.li`
flex: 0 0 100%;

&:not(:first-of-type) {
    margin-top: 16px;
}
@media (min-width: 1081px) {
    flex: 0 0 50%; 
    padding: 8px;
    &:not(:first-of-type) {
        margin-top: 0;
    }
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
    height: 120px;
}
`;

export default function MusicView() {
    return (
        <MusicViewContainer>
            <div>

                {/* <section>
                <MusicDescription>An eclectic variety of styles and immersive soundscapes.</MusicDescription>
            </section> */}

                <YoutubeList>
                    <YoutubeListItem>
                        <ResponsiveYoutubeContainer>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Ae3a2k8xAEs"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </ResponsiveYoutubeContainer>
                    </YoutubeListItem>
                    <YoutubeListItem>
                        <ResponsiveYoutubeContainer>
                            <iframe width="560"
                                height="315"
                                src="https://www.youtube.com/embed/kJyRSvX__0M"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </ResponsiveYoutubeContainer>
                    </YoutubeListItem>
                </YoutubeList>

                <BandcampList>
                    <BandcampListItem>
                        <ResponsiveBandcampContainer>
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2906715428/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/role-playing-pizza-game">Role Playing Pizza Game by Jonathon Orsi</a></iframe>
                        </ResponsiveBandcampContainer>
                    </BandcampListItem>
                    <BandcampListItem>
                        <ResponsiveBandcampContainer>
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=2247218558/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/track/thomas-the-rocket-engine">Thomas the Rocket Engine by Jonathon Orsi</a></iframe>
                        </ResponsiveBandcampContainer>
                    </BandcampListItem>
                    <BandcampListItem>
                        <ResponsiveBandcampContainer>
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=1438955147/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/oddities">Oddities by Jonathon Orsi</a></iframe>
                        </ResponsiveBandcampContainer>
                    </BandcampListItem>
                    <BandcampListItem>
                        <ResponsiveBandcampContainer>
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3353210599/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/sol-survivor">Sol Survivor by Jonathon Orsi</a></iframe>
                        </ResponsiveBandcampContainer>
                    </BandcampListItem>
                    <BandcampListItem>
                        <ResponsiveBandcampContainer>
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3032009350/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/unleeched">UnLeeched by Jonathon Orsi</a></iframe>
                        </ResponsiveBandcampContainer>
                    </BandcampListItem>
                    <BandcampListItem>
                        <ResponsiveBandcampContainer>
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3706494023/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://orsi.bandcamp.com/album/battle-bits">Battle Bits by Jonathon Orsi</a></iframe>
                        </ResponsiveBandcampContainer>
                    </BandcampListItem>
                </BandcampList>
            </div>
        </MusicViewContainer>
    );
}