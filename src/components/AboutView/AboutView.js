import React from 'react';
import styled from 'styled-components';

const AboutViewContainer = styled.section`
align-items: center;
display: flex;
min-height: 100%;
`;
export default class AboutView extends React.Component {
    render() {
        return (
            <AboutViewContainer>
                <div>
                    <p>Jonathon Orsi is a software developer by day and musical performer by night. A member of the band <a target="_blank" href="https://jojogun.ca">JoJo Gun & the Bullets</a>, he synthesizes musical notes with lines of code.</p>
                    <p>In the software development world he designs and builds websites, digital art showcases, and experimental web tools.</p>
                    <p>Musically, he composes scores, designs sound, and masters audio in games, film, and television.</p>
                    <p>He lives in Toronto.</p>
                </div>
            </AboutViewContainer>
        );
    }
}