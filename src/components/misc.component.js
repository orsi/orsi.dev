import React, { Component } from 'react';
import './misc.component.css';

const miscList = [
    {
        emoji: '🎸',
        description: 'I play guitar and sing in <a href="http://www.jojogun.ca">Jo Jo Gun & the Bullets</a>'
    },
    {
        emoji: '💻',
        description: 'I often experiment with <a href="https://www.webcomponents.org/introduction">custom web components</a> and using the browser as a platform for <a href="https://github.com/jorsi/reverie/tree/develop">all-sorts of curiosities</a>'
    }
];

export default class MiscComponent extends Component {
    render() {
        return(
            <div className="misc-component">
                <div className="row">
                    <div className="col-2">
                        <h2 className="section-title">Misc</h2>
                    </div>
                    <div className="col-10">
                        <ul className="misc-list">
                            { miscList.map((misc, i) => {
                                return (
                                    <li key={i} className="misc-item">
                                        <div className="misc-emoji">{ misc.emoji }</div>
                                        <div className="misc-description">
                                            <p dangerouslySetInnerHTML={{__html: misc.description}}></p>
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