import './styles.css';
import './app.component.css';
import React, { Component } from 'react';
import * as FaviconService from './services/favicon.service.js';
import { AutomataService } from './services/automata.service';
import { HeaderComponent } from './components/header/header.component.js';
import { AboutComponent } from './components/about/about.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { WorkComponent } from './components/work/work.component.js';

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
        <section id="work" className="app-section"></section>
          <WorkComponent></WorkComponent>
      </main>
    );
  }
}

export default AppComponent;
