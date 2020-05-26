import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AutomataService } from '../../../services/automata.service';

const AutomataContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: -16px -48px 0 -48px;
height: 96px;
position: relative;
`;
export default function Automata() {
  let automataService;
  useEffect(() => {
    automataService = new AutomataService(document.querySelector('#automata-container'), true);
    automataService.start();
  });
  return (
    <AutomataContainer id="automata-container"></AutomataContainer>
  );
}
