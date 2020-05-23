import React from 'react';
import Automata from './Automata/Automata.js';
import ProjectsList from './ProjectsList/ProjectsList.js';
import SkillsList from './SkillsList/SkillsList.js';
import Work from './Work/Work.js';

export default class DeveloperView extends React.Component {
    render() {
        return (
            <div className="DeveloperView">
                <section>
                    <Automata></Automata>
                </section>

                <section className="section projects">
                    <ProjectsList></ProjectsList>
                </section>
                
                <section className="section skills">
                    <SkillsList></SkillsList>
                </section>

                <section className="section experience">
                    <Work></Work>
                </section>

                <div id="end">
                    <div id="end-background"></div>
                    <div className="container">
                        <span>Thanks for stopping by. If you're looking for a developer or designer to consult or build your next project, <a href="mailto:jonathon.orsi@gmail.com">contact me.</a></span>
                    </div>
                </div>
                
            </div>
        );
    }
}