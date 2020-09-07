import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import TypeBox from '../TypeBox/TypeBox';

const HeaderContainer = styled.header`
margin-top: 24px;
position: relative
`;
const SocialMediaList = styled.ul`
font-size: 24px;
list-style: none;
margin: 0;
margin-top: 8px;
padding: 0;
position: relative;
`;
const SocialMediaListItem = styled.li`
display: inline-block;
&:not(:first-of-type) {
    margin-left: 16px;
}
`;
export default function Header() {
    return (
        <HeaderContainer id="header">
            <TypeBox />
            <SocialMediaList>
                <SocialMediaListItem>
                    <a href="https://github.com/orsi"
                        target="_blank"><FiGithub /></a>
                </SocialMediaListItem>
                <SocialMediaListItem>
                    <a href="https://www.linkedin.com/in/jonorsi/"
                        target="_blank"><FiLinkedin /></a>
                </SocialMediaListItem>
                <SocialMediaListItem>
                    <a href="mailto:jonathon.orsi@gmail.com"><FiMail /></a>
                </SocialMediaListItem>
            </SocialMediaList>
        </HeaderContainer>
    )
};