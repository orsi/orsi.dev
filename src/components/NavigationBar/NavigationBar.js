import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FcMusic } from 'react-icons/fc';
import { FaQuestion, FaHamburger } from 'react-icons/fa';
import { FcMultipleDevices, FcQuestions } from 'react-icons/fc';
import { FiArrowLeft, FiHome, FiMenu } from 'react-icons/fi';

const NavigationBarContainer = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 768px) {
}
`;
const NavigationBarHeader = styled.header`
    display: flex;
    flex: 0 1 auto;
    justify-content: center;
    position: relative;
    z-index: 1;
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
const NavigationMenu = styled.nav`
background: white;
display: flex;
flex-direction: column;
height: 100vh;
opacity: 0;
pointer-events: none;
position: absolute;
top: 0;
left: 0;
width: 100vw;
z-index: 0;
&.is-open {
    opacity: 1;
    pointer-events: initial;
}

@media (min-width: 768px) {
    display: block;
    height: auto;
    pointer-events: initial;
    position: relative;
    opacity: 1;
    width: 100%;
}

a {
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    text-decoration: none;

    #about {

    }
    #music {
    }
    #developer {
    }
}
`;

export default function NavigationBar() {

    // get current route to add class to main element
    let { pathname } = useLocation();
    pathname = pathname.substr(1);
    if (pathname.length === 0) pathname = 'home';

    function onClickHamburgerButton(e) {
        const navigationMenuElement = document.querySelector('#navigation-menu');
        if (navigationMenuElement.classList.contains('is-open')) {
            navigationMenuElement.classList.remove('is-open');
        } else {
            navigationMenuElement.classList.add('is-open');
        }
    }

    function onClickNavigationLink(e) {
        const navigationMenuElement = document.querySelector('#navigation-menu');
        navigationMenuElement.classList.remove('is-open');
    }

    return (
        <NavigationBarContainer>

            <NavigationBarHeader>
                <NameH1>Jonathon Orsi</NameH1>
                <HamburgerButton onClick={onClickHamburgerButton}><FiMenu /></HamburgerButton>
            </NavigationBarHeader>

            <NavigationMenu id="navigation-menu">
                <Link onClick={onClickNavigationLink} id="about" to="/about">About <FcQuestions /></Link>
                <Link onClick={onClickNavigationLink} id="music" to="/music">Music <FcMusic /></Link>
                <Link onClick={onClickNavigationLink} id="developer" to="/developer">Developer <FcMultipleDevices /></Link>
            </NavigationMenu>
            
        </NavigationBarContainer>
    )
};