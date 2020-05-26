import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AutomataService } from '../../../services/automata.service';

const AutomataContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: -72px -48px -120px -48px;
height: 192px;
position: relative;

@media (min-width: 512px) {
  margin: -84px -72px -120px -72px;
}
@media (min-width: 769px) {
  margin: -16px -48px -176px -48px;
}
`;
export default function Automata() {
  let automataService = null;
  useEffect(() => {
    if (automataService === null) {
      automataService = new AutomataService(document.querySelector('#automata-container'), true);
      automataService.start();
    }

    return () => {
      automataService.destroy();
      automataService = null;
    }
  });
  return (
    <AutomataContainer id="automata-container"></AutomataContainer>
  );
}
