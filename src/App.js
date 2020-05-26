import './index.scss';
import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Switch, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DeveloperView from './components/DeveloperView/DeveloperView.js';
import MusicView from './components/MusicView/MusicView.js';
import AboutView from './components/AboutView/AboutView';

const AppContainer = styled.main`
padding-top: 56px;
min-height: 100vh;

#navigation-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}

@media (min-width: 512px) {
  padding-top: 68px;
}
@media (min-width: 769px) {
  align-items: center;
  display: flex;
  padding-top: 0;
  padding-left: 300px;
  postition: relative;

  &.view-home {
    #navigation-view {
      width: 100%;
    }
    #section-view {
      display: none;
    }
  }

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
    z-index: 1;
  }
}
`;

const ViewContainer = styled.div`
margin: 0 auto;

&#section-view {
  padding: 16px 48px;
}
@media (min-width: 512px) {
  &#section-view {
    padding: 16px 72px;
  }
}
@media (min-width: 769px) {
  &#section-view {
    padding: 16px 48px;
  }
}

.view {
  position: absolute;
  left: 15px;
  right: 15px;
}

.view-enter {
  opacity: 0;
  transform: scale(1.1);
}

.view-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms, transform 300ms;
}

.view-exit {
  opacity: 1;
  transform: scale(1);
}

.view-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}`;

const routes = [
  { path: '/', name: 'Home', Component: null },
  { path: '/about', name: 'About', Component: AboutView },
  { path: '/music', name: 'Music', Component: MusicView },
  { path: '/developer', name: 'Developer', Component: DeveloperView }
];

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
        {routes.map(({ path, Component }) => (
            <Route key={path} 
              exact 
              path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="view"
                  unmountOnExit>
                  { Component !== null ? <Component /> : <span></span> }
                </CSSTransition>
              )}
            </Route>
          ))}
      </ViewContainer>
    </AppContainer>
);
}
