import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaBandcamp, FaYoutube } from 'react-icons/fa';
import { FcMusic, FcMultipleDevices, FcQuestions } from 'react-icons/fc';
import { FiMenu, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const NavigationBarContainer = styled.div`
font-size: 24px;
line-height: 1;
padding: 16px 2em;
position: relative;

a {
    text-decoration: none;
}

@media (min-width: 512px) {
    font-size: 36px;
}
@media (min-width: 769px) {
    align-items: center;
    display: flex;
    font-size: 24px;
    flex-direction: column;
    justify-content: center;
}
`;
const NavigationBarHeader = styled.header`
align-items: center;
display: flex;
flex: 0 1 auto;
position: relative;
z-index: 1;
width: 100%;
`;
const NameH1 = styled.h1`
font-size: 1em;
font-weight: 900;
margin: 0;
a {
    color: inherit;
}
`;
const HamburgerButton = styled.button`
background: none;
border: none;
color: inherit;
cursor: pointer;
font-size: 24px;
line-height: 0;
margin-left: auto;
padding: 0;

@media (min-width: 769px) {
    display: none;
}
`;
const PrimaryNavigation = styled.nav`
background-color: #040e1e;
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
opacity: 0;
padding: 1em 2em;
pointer-events: none;
position: absolute;
top: 0;
transition: opacity 300ms;
left: 0;
width: 100%;
z-index: 0;
${NavigationBarContainer}.is-open & {
    opacity: 1;
    pointer-events: initial;
}
@media (min-width: 769px) {
    display: block;
    height: initial;
    opacity: 1;
    padding: 0;
    pointer-events: initial;
    position: relative;
}
`;
const SecondaryNavigation = styled.nav``;

const MenuList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
@media (min-width: 769px) {
    margin-top: 32px;
}
`;
const MenuListItem = styled.li`
a {
    color: inherit;
    display: flex;
    align-items: center;
    padding: 8px 0;
    svg {
        margin-right: 16px;
    }
}
`;
const SocialMediaList = styled.ul`
bottom: 2em;
list-style: none;
margin: 0;
padding: 0;
position: absolute;
@media (min-width: 769px) {
    bottom: initial;
    margin-top: 32px;
    position: relative;
    font-size: 18px;
}
`;
const SocialMediaListItem = styled.li`
display: inline-block;
&:not(:first-of-type) {
    margin-left: 16px;
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
            className={pathname === 'home' ? 'is-open' : ''}>

            <NavigationBarHeader>
                <NameH1><Link id="home" to="/">Jonathon Orsi</Link></NameH1>
                {pathname === 'home' ? null : <HamburgerButton onClick={onClickHamburgerButton}><FiMenu /></HamburgerButton>}
            </NavigationBarHeader>

            <PrimaryNavigation id="navigation-menu">
                <MenuList>
                    <MenuListItem>
                        <Link onClick={onClickNavigationLink} id="about" to="/about">
                            <FcQuestions /> About
                        </Link>
                    </MenuListItem>
                    <MenuListItem>
                        <Link onClick={onClickNavigationLink} id="music" to="/music">
                            <FcMusic /> Music
                        </Link>
                    </MenuListItem>
                    <MenuListItem>
                        <Link onClick={onClickNavigationLink} id="developer" to="/developer"><FcMultipleDevices /> Developer
                        </Link>
                    </MenuListItem>
                </MenuList>
                <SecondaryNavigation>
                    <SocialMediaList>
                        <SocialMediaListItem>
                            <a href="https://github.com/jorsi"
                                target="_blank"><FiGithub /></a>
                        </SocialMediaListItem>
                        <SocialMediaListItem>
                            <a href="https://www.linkedin.com/in/jonorsi/"
                                target="_blank"><FiLinkedin /></a>
                        </SocialMediaListItem>
                        <SocialMediaListItem>
                            <a href="https://orsi.bandcamp.com/"
                                target="_blank"><FaBandcamp /></a>
                        </SocialMediaListItem>
                        <SocialMediaListItem>
                            <a href="https://www.youtube.com/user/JonathonOrsi"
                                target="_blank"><FaYoutube /></a>
                        </SocialMediaListItem>
                        <SocialMediaListItem>
                            <a href="mailto:jonathon.orsi@gmail.com"><FiMail /></a>
                        </SocialMediaListItem>
                    </SocialMediaList>
                </SecondaryNavigation>
            </PrimaryNavigation>

        </NavigationBarContainer>
    )
};