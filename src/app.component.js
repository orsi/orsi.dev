import React, { Component } from 'react';
import './styles.css';
import './app.component.css';
import * as FaviconService from './services/favicon.service.js';
import { HeaderComponent } from './components/header/header.component.js';
import { AboutComponent } from './components/about/about.component.js';
import { WorkComponent } from './components/work/work.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { ResumeComponent } from './components/resume/resume.component.js';
import { BeticalComponent } from './components/betical/betical.component.js';

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
      name: 'work',
      path: '/work',
      component: WorkComponent
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
    },
    {
      name: 'betical',
      path: '/betical',
      component: BeticalComponent
    }
  ]

  componentDidMount() {
    FaviconService.start();
  }

  render() {
    return (
      <main>
        <section id="top" className="app-section">
          <HeaderComponent></HeaderComponent>
        </section>
        <section id="about" className="app-section">
          <AboutComponent></AboutComponent>
        </section>
        <section id="work" className="app-section">
          <WorkComponent></WorkComponent>
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
