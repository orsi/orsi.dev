import React, { Component } from 'react';
import './about.component.css';

export class AboutComponent extends Component {
    constructor() {
        super();

        this.state = {
            mounted: false
        };
    }
    componentDidMount() {
        this.setState({ mounted: true });
    }
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="about-description">
                        <h2 className="about-title">About</h2>
                        <p>Hello, my name is Jonathon Orsi and I am a software developer. I gravitate towards web technologies and front-end user experience. I currently work as a senior software developer at Bombardier Aerospace transitioning business workflow processes into web applications.</p>
                        <p>I often experiment with <a href="https://www.webcomponents.org/introduction">custom web components</a> and have a deep interest in using the browser as a platform for <a href="https://github.com/jorsi/reverie/tree/develop">experimenting</a>. When I'm not coding I am usually playing <a href="https://www.youtube.com/watch?v=eyLexd5MCCw&feature=youtu.be&t=14">some</a> <a href="https://www.youtube.com/watch?v=zOHUfhNQsoc&feature=youtu.be&t=1231">sort</a> of <a href="http://jojogun.ca">instrument</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}