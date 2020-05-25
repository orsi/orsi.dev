import './index.scss';
import './layout.scss';
import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DeveloperView from './components/DeveloperView/DeveloperView.js';
import MusicView from './components/MusicView/MusicView.js';
import AboutView from './components/AboutView/AboutView';

const AppContainer = styled.main`
padding-top: 45px;

#navigation-view {
  flex: 0 0 300px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}

@media (min-width: 768px) {
  display: flex;
  padding-top: 0;
  postition: relative;
  overflow: hidden;
 
  #navigation-view {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 300px;
  }
  #section-view {
    margin-left: 300px;
    z-index: 1;
  }
}
`;
const ViewContainer = styled.div``;
export default function App() {
  // get current route to add class to main element
  let { pathname } = useLocation();
  pathname = pathname.substr(1);
  if (pathname.length === 0) pathname = 'home';

  return (
    <AppContainer className={"view-" + pathname }>
      <ViewContainer id="navigation-view">
        <NavigationBar />
      </ViewContainer>
      <ViewContainer id="section-view">
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
          </Route>
        </Switch>
      </ViewContainer>
    </AppContainer>
);
}
