import React from 'react';
import styled from 'styled-components';
import { FaBandcamp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const StyledListItem = styled.li`
    display: inline-block;
`;
export default function MusicSocialMediaList() {
    return (
        <StyledList>
            <StyledListItem>
                <a href="https://orsi.bandcamp.com/"
                    target="_blank">
                    <FaBandcamp />
                </a>
            </StyledListItem>
            <StyledListItem>
                <a href="https://www.youtube.com/user/JonathonOrsi"
                    target="_blank">
                    <FaYoutube />
                </a>
            </StyledListItem>
        </StyledList>
    );
}