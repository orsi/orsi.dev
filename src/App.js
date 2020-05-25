import './index.scss';
import './layout.scss';
import './App.scss';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import HomeView from './components/HomeView/HomeView.js';
import DeveloperView from './components/DeveloperView/DeveloperView.js';
import MusicView from './components/MusicView/MusicView.js';
import AboutView from './components/AboutView/AboutView';

export default function App() {
  // get current route to add class to main element
  let { pathname } = useLocation();
  pathname = pathname.substr(1);
  if (pathname.length === 0) pathname = 'home';

  return (
    <main className={"App view-" + pathname }>
      <TopBar />
      <Switch>
        <Route path="/about">
          <AboutView />
        </Route>
        <Route path="/music">
          <MusicView />
        </Route>
        <Route path="/developer">
          <DeveloperView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>

    </main>
);
}
