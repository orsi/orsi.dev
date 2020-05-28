import React from 'react';
import styled from 'styled-components';
const SkillsSectionContainer = styled.section``;
const SkillsSectionTitle = styled.h2``;
const ExperienceSection = styled.div`
&:not(:first-of-type) {
    margin-top: 16px;
}
`;
const ExperienceHeader = styled.h3`
font-weight: 700;
line-height: 1;
margin: 0;
text-transform: uppercase;
`;
const SkillsList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;
const SkillsListItem = styled.li`
display: inline-block;
position: relative;
&:not(:last-of-type) {
    margin-right: 4px;
}
&:not(:last-of-type)::after {
    content: ',';
}
`;
export default function SkillsSection() {
    return (
        <SkillsSectionContainer>
            <SkillsSectionTitle id="skills">Skills</SkillsSectionTitle>
            <ExperienceSection>
                <ExperienceHeader>5+ Years</ExperienceHeader>
                <SkillsList>
                    <SkillsListItem>AngularJS</SkillsListItem>
                    <SkillsListItem>BootStrap</SkillsListItem>
                    <SkillsListItem>C#</SkillsListItem>
                    <SkillsListItem>Express</SkillsListItem>
                    <SkillsListItem>git/GitHub</SkillsListItem>
                    <SkillsListItem>HTML5/CSS/JavaScript</SkillsListItem>
                    <SkillsListItem>jQuery</SkillsListItem>
                    <SkillsListItem>mongoDB/mongoose</SkillsListItem>
                    <SkillsListItem>Node.js/npm</SkillsListItem>
                    <SkillsListItem>SASS/LESS</SkillsListItem>
                </SkillsList>
            </ExperienceSection>
            <ExperienceSection>
                <ExperienceHeader>3-4 Years</ExperienceHeader>
                <SkillsList>
                    <SkillsListItem>.NET Core</SkillsListItem>
                    <SkillsListItem>.NET MVC</SkillsListItem>
                    <SkillsListItem>.NET Web API</SkillsListItem>
                    <SkillsListItem>Adobe Illustrator</SkillsListItem>
                    <SkillsListItem>Adobe Photoshop</SkillsListItem>
                    <SkillsListItem>Angular</SkillsListItem>
                    <SkillsListItem>Babel</SkillsListItem>
                    <SkillsListItem>Entity Framework</SkillsListItem>
                    <SkillsListItem>JSX/TSX</SkillsListItem>
                    <SkillsListItem>Material Design</SkillsListItem>
                    <SkillsListItem>Mocha/Chai</SkillsListItem>
                    <SkillsListItem>MS Visio</SkillsListItem>
                    <SkillsListItem>Razor</SkillsListItem>
                    <SkillsListItem>React</SkillsListItem>
                    <SkillsListItem>RxJs</SkillsListItem>
                    <SkillsListItem>SQL</SkillsListItem>
                    <SkillsListItem>SQL Management Studio</SkillsListItem>
                    <SkillsListItem>MS SQL Server</SkillsListItem>
                    <SkillsListItem>SSIS</SkillsListItem>
                    <SkillsListItem>Telerik Kendo UI</SkillsListItem>
                    <SkillsListItem>TypeScript</SkillsListItem>
                    <SkillsListItem>Webpack</SkillsListItem>
                </SkillsList>
            </ExperienceSection>
            <ExperienceSection>
                <ExperienceHeader>1-2 Years</ExperienceHeader>
                <SkillsList>
                    <SkillsListItem>Adobe XD</SkillsListItem>
                    <SkillsListItem>Apache</SkillsListItem>
                    <SkillsListItem>C</SkillsListItem>
                    <SkillsListItem>Java</SkillsListItem>
                    <SkillsListItem>MySQL</SkillsListItem>
                    <SkillsListItem>NGINX</SkillsListItem>
                    <SkillsListItem>NgRX</SkillsListItem>
                    <SkillsListItem>php</SkillsListItem>
                    <SkillsListItem>Python</SkillsListItem>
                    <SkillsListItem>Rust</SkillsListItem>
                    <SkillsListItem>Shopify</SkillsListItem>
                    <SkillsListItem>SignalR</SkillsListItem>
                    <SkillsListItem>Sketch</SkillsListItem>
                    <SkillsListItem>socket.io</SkillsListItem>
                    <SkillsListItem>Squarespace</SkillsListItem>
                    <SkillsListItem>Styled Components</SkillsListItem>
                    <SkillsListItem>Swift</SkillsListItem>
                    <SkillsListItem>WordPress</SkillsListItem>
                </SkillsList>
            </ExperienceSection>
        </SkillsSectionContainer>
    );
}