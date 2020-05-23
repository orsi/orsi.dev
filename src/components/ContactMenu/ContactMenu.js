import React from 'react';
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const StyledListItem = styled.li`
    display: inline-block;
`;
export default function ContactMenu() {
    return (
        <StyledList>
            <StyledListItem>
                <a href="https://github.com/jorsi"
                    target="_blank">
                    <FiGithub />
                </a>
            </StyledListItem>
            <StyledListItem>
                <a href="https://www.linkedin.com/in/jonorsi/"
                    target="_blank">
                    <FiLinkedin />
                </a>
            </StyledListItem>
            <StyledListItem>
                <a href="mailto:jonathon.orsi@gmail.com">
                    <FiMail />
                </a>
            </StyledListItem>
        </StyledList>
    );
}