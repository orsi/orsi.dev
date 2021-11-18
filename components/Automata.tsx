import React from 'react';
import { AutomataService } from '~/services/automata.service.ts';

export default function Automata() {
  let automataService: AutomataService | null = null;
  React.useEffect(() => {
    if (automataService === null) {
      automataService = new AutomataService(
        document.querySelector('#automata-container'),
        true
      );
      automataService.start();
    }

    return () => {
      automataService?.destroy();
      automataService = null;
    };
  });
  return <div id="automata-container"></div>;
}
