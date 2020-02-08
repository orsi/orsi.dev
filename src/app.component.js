import './main.scss';
import './layout.scss';
import React, { Component } from 'react';
import * as FaviconService from './services/favicon.service.js';
import { HeaderComponent } from './components/header/header.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component.js';

class AppComponent extends Component {
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
  }

  render() {
    return (
      <main className="app">
        
        <section id="top">
          <HeaderComponent></HeaderComponent>
        </section>

        <section id="projects" 
          className="section projects">
          <ProjectsComponent></ProjectsComponent>
        </section>

        <section id="skills" 
          className="section skills">
          <SkillsComponent></SkillsComponent>
        </section>

        <section id="work" 
          className="section experience">
          <h2 className="section-title">Work</h2>
          <WorkComponent></WorkComponent>
        </section>
      </main>
    );
  }
}

export default AppComponent;
