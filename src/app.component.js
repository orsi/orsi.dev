import './styles.css';
import './app.component.css';
import React, { Component } from 'react';
import * as FaviconService from './services/favicon.service.js';
import { AutomataService } from './services/automata.service';
import { HeaderComponent } from './components/header/header.component.js';
import { AboutComponent } from './components/about/about.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { WorkComponent } from './components/work/work.component.js';
import { SkillsComponent } from './components/skills/skills.component';

class AppComponent extends Component {
  automataService;
  componentWillUnmount() {
    this.automataService.stop();
  }
  componentDidMount() {
    this.automataService = new AutomataService(document.querySelector('#life-container'));
    this.automataService.start();
    FaviconService.start();
  }

  render() {
    return (
      <main className="app">
        <div id="life-container"></div>
        <section id="top" 
          className="section">
          <HeaderComponent></HeaderComponent>
        </section>
        <section id="about" 
          className="section">
          <h2 className="section-title">About</h2>
          <AboutComponent></AboutComponent>
        </section>
        <section id="projects" 
          className="section">
          <h2 className="section-title">Projects</h2>
          <ProjectsComponent></ProjectsComponent>
        </section>
        <section id="skills" 
          className="section">
          <h2 className="section-title">Skills</h2>
          <SkillsComponent></SkillsComponent>
        </section>
        <section id="work" 
          className="section">
          <h2 className="section-title">Work</h2>
          <WorkComponent></WorkComponent>
        </section>
      </main>
    );
  }
}

export default AppComponent;
