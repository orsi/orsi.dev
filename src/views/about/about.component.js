import React, { Component } from 'react';
import './about.component.css';
import guitar from '../../assets/guitar.jpg';

export default class AboutComponent extends Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <h2>About</h2>

                            <p>I am a full-stack web developer with a focus on responsive and intuitive user experiences. My current work for Bombardier Aerospace involves digitizing business workflow processes into enterprise web applications.</p>

                            <div className="about__programming">
                                <p>I often experiment with <a href="https://www.webcomponents.org/introduction">custom web components</a>, and I have a deep interest in using the browser as a platform for <a href="https://github.com/jorsi/reverie/tree/develop">experimenting</a>.</p>
                            </div>

                            <div className="about__music">
                                <p>When I'm not coding, you can find me <a href="https://www.youtube.com/watch?v=eyLexd5MCCw&feature=youtu.be&t=14">laying down a bassline</a>, <a href="https://www.youtube.com/watch?v=zOHUfhNQsoc&feature=youtu.be&t=1231">shredding the guitar</a> and <a href="http://jojogun.ca">belting a few songs</a>.</p>
                            </div>
                        </div>
                        <div className="column flex align-items-center">
                            <img src={guitar} alt="Jon playing guitar"></img>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}