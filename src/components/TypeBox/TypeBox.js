import React, { useEffect } from 'react';
import * as Typed from 'typed.js';
import styled from 'styled-components';

const TypeBoxContainer = styled.div`
  h1 {
    color: #fafafa;
    display: inline-block;
    font-family: 'Press Start 2P';
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }
`;
export default function TypeBox() {
  useEffect(() => {
    var typed = new Typed('#type-box', {
      strings: ['Hi^450, my name is Jonathon Orsi^450, a web developer'],
      typeSpeed: 55,
      // loop: true,
    });
  });
  return (
    <TypeBoxContainer>
      <h1>
        <span id="type-box"></span>
      </h1>
    </TypeBoxContainer>
  );
}
