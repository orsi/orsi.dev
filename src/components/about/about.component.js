import './about.component.css';
import React, { Component } from 'react';

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
                        <p>
                            <em>Hello!</em> I am Jonathon Orsi, a software developer in Toronto, Canada. I specialize in web development and user experience.
                        </p>
                        <p>
                            I have a deep interest in using the browser as a platform for <a href="https://github.com/jorsi/reverie/tree/develop">experimenting</a>. I'm usually poking around with <a href="https://codex.jonorsi.com/">audio</a> and <a href="https://github.com/jorsi/reverie">visual</a> browser technologies. 
                        </p>
                        <p>
                            When I'm not coding I am usually playing <a href="https://www.youtube.com/watch?v=eyLexd5MCCw&feature=youtu.be&t=14">some</a> <a href="https://www.youtube.com/watch?v=zOHUfhNQsoc&feature=youtu.be&t=1231">sort</a> of <a href="http://jojogun.ca">instrument</a>.
                        </p>

                    </div>

                    <div className="currently">
                        I am currently looking for new work. If you are looking for a developer, <a href="mailto:jonathon.orsi@gmail.com">let me know.</a>
                    </div>
                </div>
            </div>
        );
    }
}