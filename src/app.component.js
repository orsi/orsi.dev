import './main.css';
import React, { Component } from 'react';
import * as FaviconService from './services/favicon.service.js';
import { HeaderComponent } from './components/header/header.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { WorkComponent } from './components/work/work.component.js';
import { SkillsComponent } from './components/skills/skills.component';

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
        
        <section id="top" 
          className="section">
          <HeaderComponent></HeaderComponent>
        </section>
        
        <div className="container">

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

        </div>
      </main>
    );
  }
}

export default AppComponent;
