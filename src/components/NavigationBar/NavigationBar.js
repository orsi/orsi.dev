import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FcMusic } from 'react-icons/fc';
import { FaQuestion, FaHamburger } from 'react-icons/fa';
import { FcMultipleDevices, FcQuestions } from 'react-icons/fc';
import { FiArrowLeft, FiHome, FiMenu } from 'react-icons/fi';

const NavigationBarContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

&.is-open {
    height: 100vh;
    #navigation-menu {
        opacity: 1;
        pointer-events: initial;
    }
}
`;
const NavigationBarHeader = styled.header`
display: flex;
flex: 0 1 auto;
justify-content: center;
position: relative;
z-index: 1;
width: 100%;
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
flex: 1 0 auto;
flex-direction: column;
opacity: 0;
pointer-events: none;
z-index: 0;

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
        const navigationBarElement = document.querySelector('#navigation-bar');
        if (navigationBarElement.classList.contains('is-open')) {
            navigationBarElement.classList.remove('is-open');
        } else {
            navigationBarElement.classList.add('is-open');
        }
    }

    function onClickNavigationLink(e) {
        const navigationMenuElement = document.querySelector('#navigation-bar');
        navigationMenuElement.classList.remove('is-open');
    }

    return (
        <NavigationBarContainer id="navigation-bar"
            className={ pathname === 'home' ? 'is-open' : '' }>

            <NavigationBarHeader>
                <NameH1>Jonathon Orsi</NameH1>
                { pathname === 'home' ? null : <HamburgerButton onClick={onClickHamburgerButton}><FiMenu /></HamburgerButton> }
            </NavigationBarHeader>

            <NavigationMenu id="navigation-menu">
                <Link onClick={onClickNavigationLink} id="about" to="/about">About <FcQuestions /></Link>
                <Link onClick={onClickNavigationLink} id="music" to="/music">Music <FcMusic /></Link>
                <Link onClick={onClickNavigationLink} id="developer" to="/developer">Developer <FcMultipleDevices /></Link>
            </NavigationMenu>
            
        </NavigationBarContainer>
    )
};