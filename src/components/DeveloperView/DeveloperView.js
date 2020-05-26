import React from 'react';
import Automata from './Automata/Automata.js';
import ProjectsSection from './ProjectsSection/ProjectsSection.js';
import SkillsSection from './SkillsSection/SkillsSection.js';
import WorkSection from './WorkSection/WorkSection.js';

export default class DeveloperView extends React.Component {
    render() {
        return (
            <div className="DeveloperView">
                {/* <section>
                    <Automata></Automata>
                </section> */}

                <p>Creative digital spaces and elegant user experiences.</p>

                <SkillsSection />
                <WorkSection></WorkSection>
                <ProjectsSection></ProjectsSection>
                
                <section>
                    <p>Interested in creating a digital presence together? Feel free to <a href="mailto:jonathon.orsi@gmail.com">send me a message.</a></p>
                </section>

            </div>
        );
    }
}