import './index.scss';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as FaviconService from './services/favicon.service.js';
import Automata from './components/Automata/Automata.js';
import Header from './components/Header/Header';
import DeveloperView from './components/DeveloperView/DeveloperView.js';
import About from './components/About/About';

const AppContainer = styled.main`
height: 100%;`;
const AppWell = styled.div`
margin: 0 auto;
max-width: 720px;
padding: 0 24px;
`;

const BackgroundContainer = styled.div`
bottom: 0;
height: 100%;
left: 0;
position: fixed;
right: 0;
top; 0;
width: 100%;
z-index: -1;
`;

export default function App() {

  useEffect(() => {
    FaviconService.start();
  });

  return (
    <AppContainer>
      <BackgroundContainer id="background">
          <Automata></Automata>
      </BackgroundContainer>
      <AppWell>
          <Header />
          <About />
          <DeveloperView />
        </AppWell>
    </AppContainer>
  );
}
