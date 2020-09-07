import React, { useEffect } from 'react';
import * as Typed from 'typed.js'
import styled from 'styled-components';

const TypeBoxContainer = styled.div`
h1 {
    color: #fafafa;
    display: inline-block;
    font-family: Instructions;
    font-size: 64px;
    line-height: 1;
}
`;
export default function TypeBox() {
    useEffect(() => {
        var typed = new Typed('#type-box', {
            strings: [
                "Hi^450, my name is Jonathon Orsi^450, a software developer"
            ],
            typeSpeed: 55,
            // loop: true,
          });
    });
    return (
        <TypeBoxContainer>
            <h1><span id="type-box"></span></h1>
        </TypeBoxContainer>
    )
};