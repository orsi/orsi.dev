import './main.scss';
import './layout.scss';
import './color-themes.scss';
import './app.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DeveloperView from './components/DeveloperView/DeveloperView.js';
import MusicView from './components/MusicView/MusicView.js';
import HomeView from './components/HomeView/HomeView';

export const AppComponent = () => (
  <BrowserRouter>
    <main id="app">

      <Switch>
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
  </BrowserRouter>
);
