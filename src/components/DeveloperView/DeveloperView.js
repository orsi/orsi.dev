import React from 'react';
import styled from 'styled-components';
import Automata from './Automata/Automata.js';
import ProjectsSection from './ProjectsSection/ProjectsSection.js';
import SkillsSection from './SkillsSection/SkillsSection.js';
import WorkSection from './WorkSection/WorkSection.js';

const DeveloperViewContainer = styled.section``;
const DeveloperViewTitle = styled.h2``;
const DescriptionSection = styled.p``;
const ContactSection = styled.p``;
export default function DeveloperView() {
    return (
        <DeveloperViewContainer>
            <Automata></Automata>

            <DeveloperViewTitle>Web Design and Development</DeveloperViewTitle>

            <DescriptionSection>As a full-stack developer and creative designer, I build full-featured web applications and digital spaces for individuals, small-businesses, and enterprises.</DescriptionSection>

            <ContactSection>Interested in creating an online presence together? Feel free to <a href="mailto:jonathon.orsi@gmail.com">send me a message.</a></ContactSection>

            <ProjectsSection></ProjectsSection>
            <WorkSection></WorkSection>
            <SkillsSection />
            

        </DeveloperViewContainer>
    );
}