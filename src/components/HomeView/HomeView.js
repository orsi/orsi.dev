import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContactMenu from '../ContactMenu/ContactMenu';
import { FcMultipleDevices } from 'react-icons/fc';
import { FcMusic } from 'react-icons/fc';

const MainNavigation = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
`;
const NavigationLink = styled.div`
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    a {
        text-decoration: none;
    }
`;
const StyledH1 = styled.h1`
    font-weight: 300;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
`;
const Dark = styled.div`
    background: #111;
    color: #eee;
    height: 100%;
    width: 100%;
`;
const Light = styled.div`
    background: #eee;
    color: #111;
    height: 100%;
    width: 100%;
`;

export default class HomeView extends React.Component {
    render() {
        return (
            <div className="Home">
                <MainNavigation>
                    <NavigationLink>
                         <Dark>
                            <Link to="/music">Music <FcMusic /></Link>
                            <StyledH1>Jonathon Orsi</StyledH1>
                        </Dark>
                    </NavigationLink>
                    <NavigationLink>
                        <Light>
                            <ContactMenu />
                            <Link to="/developer">Developer <FcMultipleDevices /></Link>
                        </Light>
                    </NavigationLink>
                </MainNavigation>
            </div>
        )
    }
};