import './index.scss';
import './layout.scss';
import './App.scss';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import DeveloperView from './components/DeveloperView/DeveloperView.js';
import MusicView from './components/MusicView/MusicView.js';

export default function App() {
  // get current route to add class to main element
  let { pathname } = useLocation();
  pathname = pathname.substr(1);
  if (pathname.length === 0) pathname = 'home';

  return (
    <main className={"App view-" + pathname }>
      <TopBar />
      <Switch>
        <Route path="/music">
          <MusicView />
        </Route>
        <Route path="/developer">
          <DeveloperView />
        </Route>
        <Route path="/">
          {/* <HomeView /> */}
        </Route>
      </Switch>

    </main>
);
}
