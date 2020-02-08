import './main.scss';
import './layout.scss';
import './color-themes.scss';
import './app.scss';
import React, { Component } from 'react';
import { AutomataService } from './services/automata.service';
import * as FaviconService from './services/favicon.service.js';
import { HeaderComponent } from './components/header/header.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component.js';

class AppComponent extends Component {
  automataService;
  componentDidMount() {
    FaviconService.start();

    // smooth scroll for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();

        const hashValue = anchor.getAttribute('href')
        document.querySelector(hashValue).scrollIntoView({
            behavior: 'smooth'
        });

        history.pushState(null, null, hashValue)
      });
    });

    this.automataService = new AutomataService(document.querySelector('#end-background'));
    this.automataService.start();
  }

  render() {
    return (
      <main id="app">
        
        <section>
          <HeaderComponent></HeaderComponent>
        </section>

        <section className="section projects">
          <ProjectsComponent></ProjectsComponent>
        </section>

        <section className="section skills">
          <SkillsComponent></SkillsComponent>
        </section>

        <section className="section experience">
          <WorkComponent></WorkComponent>
        </section>

        <div id="end">
          <div id="end-background"></div>
          <div className="container">
            <h1>Thanks for stopping by. If you're looking for a developer or designer to consult or build your next project, <a href="mailto:jonathon.orsi@gmail.com">contact me.</a></h1>
          </div>
        </div>
      </main>
    );
  }
}

export default AppComponent;
