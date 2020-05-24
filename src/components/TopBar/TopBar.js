import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import DeveloperSocialMediaList from '../DeveloperSocialMediaList/DeveloperSocialMediaList';
import MusicSocialMediaList from '../MusicSocialMediaList/MusicSocialMediaList';
import { FcMultipleDevices } from 'react-icons/fc';
import { FcMusic } from 'react-icons/fc';

const StyledTopBar = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props => {
        let { pathname } = useLocation();
        return pathname.substr(1).length === 0 ? '100vh' : 'auto';
    }};
`;
const OrsiHeader = styled.div`
    flex: 0 1 auto;
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    a { text-decoration: none; }
`;
const NavigationLink = styled.div`
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    a {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        text-decoration: none;
        width: 100%;
    }

    &.music {
        background: #111;
        color: #eee;
    }
    &.developer {
        background: #eee;
        color: #111;
    }
`;
export default function TopBar() {
    return (
        <StyledTopBar>
            <OrsiHeader><Link to="/">Jonathon Orsi</Link></OrsiHeader>
            <NavigationLink className="music">
                <Link to="/music">Music <FcMusic /></Link>
                {/* <MusicSocialMediaList /> */}
            </NavigationLink>
            <NavigationLink className="developer">
                <Link to="/developer">Developer <FcMultipleDevices /></Link>
                {/* <DeveloperSocialMediaList /> */}
            </NavigationLink>
        </StyledTopBar>
    )
};