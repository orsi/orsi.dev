import React, { Component } from 'react';
import './styles.css';
import './app.component.css';
import * as FaviconService from './services/favicon.service.js';
import { HeaderComponent } from './components/header/header.component.js';
import { AboutComponent } from './components/about/about.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { ResumeComponent } from './components/resume/resume.component.js';
import { AutomataService } from './services/automata.service';

class AppComponent extends Component {
  routes = [
    {
      name: 'home',
      path: '/',
      component: HeaderComponent
    },
    {
      name: 'about',
      path: '/about',
      component: AboutComponent
    },
    {
      name: 'projects',
      path: '/projects',
      component: ProjectsComponent
    },
    {
      name: 'resume',
      path: '/resume',
      component: ResumeComponent
    }
  ]
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
      <main>
        <div id="life-container"></div>
        <section id="top" className="app-section">
          <HeaderComponent></HeaderComponent>
        </section>
        <section id="about" className="app-section">
          <AboutComponent></AboutComponent>
        </section>
        <section id="projects" className="app-section">
          <ProjectsComponent></ProjectsComponent>
        </section>
        <section id="resume" className="app-section"></section>
          <ResumeComponent></ResumeComponent>
      </main>
    );
  }
}

export default AppComponent;
