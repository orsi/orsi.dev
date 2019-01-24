import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.component.css';
import * as FaviconService from './services/favicon.service.js';
import { BackButtonComponent } from './components/back-button.component.js';
import HomeViewComponent from './views/home/home.component.js';
import AboutViewComponent from './views/about/about.component.js';
import WorkViewComponent from './views/work/work.component.js';
import ProjectsViewComponent from './views/projects/projects.component.js';
import ResumeViewComponent from './views/resume/resume.component.js';

class AppComponent extends Component {

  componentDidMount() {
    FaviconService.start();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <BackButtonComponent></BackButtonComponent>
          <Switch>
            <Route exact path="/" component={HomeViewComponent} />
            <Route exact path="/about" component={AboutViewComponent} />
            <Route exact path="/work" component={WorkViewComponent} />
            <Route exact path="/projects" component={ProjectsViewComponent} />
            <Route exact path="/resume" component={ResumeViewComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppComponent;
