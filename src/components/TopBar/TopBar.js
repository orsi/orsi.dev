import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import DeveloperSocialMediaList from '../DeveloperSocialMediaList/DeveloperSocialMediaList';
import MusicSocialMediaList from '../MusicSocialMediaList/MusicSocialMediaList';
import { FcMultipleDevices } from 'react-icons/fc';
import { FcMusic } from 'react-icons/fc';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { FaQuestion } from 'react-icons/fa';

const StyledTopBar = styled.div`
    display: flex;
    flex-direction: column;
`;
const BarHeader = styled.header`
    display: flex;
    flex: 0 1 auto;
    font-size: 18px;
    font-weight: 900;
    justify-content: center;
    text-align: center;
    a { text-decoration: none; }
`;
export default function TopBar() {
    return (
        <StyledTopBar>
            <BarHeader>
                <Link to="/"><FiHome /></Link>
                <Link to="/about"><FaQuestion /></Link>
                <Link to="/music"><FcMusic /></Link>
                <Link to="/developer"><FcMultipleDevices /></Link>
                Jonathon Orsi
            </BarHeader>
        </StyledTopBar>
    )
};