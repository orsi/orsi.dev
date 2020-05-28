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
  display: flex;
  justify-content: center;
  padding-top: 0;
  position: relative;
  max-width: 1170px;
  margin: 0 auto;

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
    flex: 0 0 300px;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
  }
  #section-view {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    min-width: 0px;
    min-height: 100vh;
    z-index: 1;
  }
}
`;

const ViewContainer = styled.div`
&#section-view {
  padding: 16px 48px;
  position: relative;
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

// route change animations
.view-enter {
  opacity: 0;
}
.view-enter-active {
  opacity: 1;
  transition: opacity 300ms;
}
.view-exit {
  opacity: 1;
  position: absolute;
  top: 0;
}
.view-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}
`;

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

  function onViewEnter(element) {
    document.body.style.overflow = 'hidden';
  }
  function onViewExit(element) {
    const paddingTop = window.getComputedStyle(element.parentElement, null).getPropertyValue('padding-top');
    const paddingLeft = window.getComputedStyle(element.parentElement, null).getPropertyValue('padding-left');
    const innerWidth = element.parentElement.clientWidth - (parseInt(paddingLeft) * 2);
    element.style.width = innerWidth + 'px';
    element.style.top = paddingTop;
    element.style.left = paddingLeft;
  }
  function onViewExited(element) {
    document.body.style.overflow = 'auto';
  }

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
                  onEnter={onViewEnter}
                  onExit={onViewExit}
                  onExited={onViewExited}
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
