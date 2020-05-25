import React from 'react';
import Automata from '../Automata/Automata.js';
import ProjectsList from './ProjectsList/ProjectsList.js';
import SkillsList from './SkillsList/SkillsList.js';
import WorksList from './WorksList/WorksList.js';

export default class DeveloperView extends React.Component {
    render() {
        return (
            <div className="DeveloperView">
                <section>
                    <Automata></Automata>
                </section>

                <p>
                    I am developer and designer based in Toronto, Canada. I specialize in web development with a focus on elegant and intuitive user experiences.
                </p>

                <section>
                    <ProjectsList></ProjectsList>
                </section>

                <section>
                    <SkillsList></SkillsList>
                </section>

                <section>
                    <WorksList></WorksList>
                </section>

                <section>
                    <p>Interested in creating a digital presence together? Feel free to <a href="mailto:jonathon.orsi@gmail.com">send me a message.</a></p>
                </section>

            </div>
        );
    }
}