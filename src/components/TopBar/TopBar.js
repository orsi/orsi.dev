import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FcMusic } from 'react-icons/fc';
import { FaQuestion, FaHamburger } from 'react-icons/fa';
import { FcMultipleDevices } from 'react-icons/fc';
import { FiArrowLeft, FiHome, FiMenu } from 'react-icons/fi';

const NavigationBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    // @media (min-width: 768px) {
    //     position: sticky;
    //     top: 0;
    //     left: 0;
    //     height: 100vh;
    //     width: 300px;
    // }
`;
const BarHeader = styled.header`
    display: flex;
    flex: 0 1 auto;
    justify-content: center;
`;
const NameH1 = styled.h1`
font-size: 18px;
font-weight: 900;
margin: 0;
`;
const HamburgerButton = styled.button`
background: none;
border: none;
cursor: pointer;
height: 45px;
margin-left: auto;
padding: 0;
width: 45px;

@media (min-width: 768px) {
    display: none;
}
`;
const Navigation = styled.nav``;
const NavigationLink = styled.div`
align-items: center;
display: flex;
flex: 1 0 auto;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;

    &.music {
        background: #111;
        color: #eee;
    }
    &.developer {
        background: #eee;
        color: #111;
    }
`;
export default function NavigationBar() {

    // get current route to add class to main element
    let { pathname } = useLocation();
    pathname = pathname.substr(1);
    if (pathname.length === 0) pathname = 'home';

    return (
        <NavigationBarContainer>

            <BarHeader>
                <NameH1>Jonathon Orsi</NameH1>
                <HamburgerButton><FiMenu /></HamburgerButton>
            </BarHeader>

            <Navigation>

                <NavigationLink className="music">
                    <Link to="/about">About <FcMusic /></Link>
                </NavigationLink>
                <NavigationLink className="music">
                    <Link to="/music">Music <FcMusic /></Link>
                </NavigationLink>
                <NavigationLink className="developer">
                    <Link to="/developer">Developer <FcMultipleDevices /></Link>
                </NavigationLink>
            </Navigation>
        </NavigationBarContainer>
    )
};