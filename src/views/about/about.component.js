import React, { Component } from 'react';
import './about.component.css';

const aboutList = [
    {
        emoji: '🎸',
        description: 'I play <a href="https://www.youtube.com/watch?v=eyLexd5MCCw&feature=youtu.be&t=14">bass</a>, <a href="https://www.youtube.com/watch?v=zOHUfhNQsoc&feature=youtu.be&t=1231">guitar</a> and <a href="http://jojogun.ca">sing</a>, a lot'
    },
    {
        emoji: '💻',
        description: 'I often experiment with <a href="https://www.webcomponents.org/introduction">custom web components</a> and using the browser as a platform for <a href="https://github.com/jorsi/reverie/tree/develop">experimenting</a>'
    }
];

export default class AboutComponent extends Component {
    render() {
        return(
            <div className="about-component">
                <div className="row">
                    <div className="col-2">
                        <h2 className="section-title">About</h2>
                    </div>
                    <div className="col-10">

                        <p>I am a full-stack web developer committed to responsive and intuitive user experiences. At Bombardier Aerospace, I digitize current QA business processes into enterprise web applications. I continually learn and experiment with emerging web technologies and open-source platforms.</p>

                        <ul className="about-list">
                            { aboutList.map((about, i) => {
                                return (
                                    <li key={i} className="about-item">
                                        <div className="about-emoji">{ about.emoji }</div>
                                        <div className="about-description">
                                            <p dangerouslySetInnerHTML={{__html: about.description}}></p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}