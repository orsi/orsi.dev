import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AutomataService } from '../../services/automata.service';

const AutomataContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export default function Automata() {
  let automataService = null;
  useEffect(() => {
    if (automataService === null) {
      automataService = new AutomataService(
        document.querySelector('#automata-container'),
        true
      );
      automataService.start();
    }

    return () => {
      automataService.destroy();
      automataService = null;
    };
  });
  return <AutomataContainer id="automata-container"></AutomataContainer>;
}
