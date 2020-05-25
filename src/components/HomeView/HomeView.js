import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import DeveloperSocialMediaList from '../DeveloperSocialMediaList/DeveloperSocialMediaList';
import MusicSocialMediaList from '../MusicSocialMediaList/MusicSocialMediaList';
import { FcMultipleDevices } from 'react-icons/fc';
import { FcMusic } from 'react-icons/fc';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

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
export default class Homeview extends React.Component {
    render() {
        return (
            <div className="HomeView">
                <NavigationLink className="music">
                    <Link to="/about">About <FcMusic /></Link>
                </NavigationLink>
                <NavigationLink className="music">
                    <Link to="/music">Music <FcMusic /></Link>
                </NavigationLink>
                <NavigationLink className="developer">
                    <Link to="/developer">Developer <FcMultipleDevices /></Link>
                </NavigationLink>
            </div>
        );
    }
}