import React from 'react';
import styled from 'styled-components';

const SkillsListContainer = styled.section`
.section-title {
    padding: 48px 0;
    text-align: center;
}
.skills-container {
    &:not(:last-of-type) {
        margin-bottom: 24px;
    }
}
.skills-title {
    font-family: 'IBM Plex Mono', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1;
    margin: 0 0 16px 0;
    text-transform: uppercase;

    .small {
        font-size: 12px;
        margin-left: 8px;
        opacity: .2;
    }
}
@media (min-width: 568px) {
    .skills-container {
        display: flex;
        align-items: center;
    }
    .skills-title {
        flex: 0 0 180px;
        text-align: right;
        margin: 0 16px 0 0;
        .small {
            display: block;
            margin: 0;
        }
    }
}
.skills-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
.skills-list-item {
    display: inline-block;
    position: relative;
    &:not(:last-of-type) {
        margin-right: 16px;
    }

    img {
        display: inline-block;
        height: 32px;
        width: auto;
    }
    .sr-only {
        display: none;
    }
}
`;
export default function SkillsList() {
    return (
        <SkillsListContainer>
            <h2 className="section-title">Skills</h2>

            <h4 className="skills-title">5+ Years</h4>
            <ul className="skills-list">
                <li className="skills-list-item">
                    <span>MS Sql Server</span>
                </li>
                <li className="skills-list-item">
                    <span>.NET MVC</span>
                </li>
                <li className="skills-list-item">
                    <span>.NET Web API</span>
                </li>
                <li className="skills-list-item">
                    <span>.NET Core</span>
                </li>
                <li className="skills-list-item">
                    <span>Entity Framework</span>
                </li>
                <li className="skills-list-item">
                    <span>Kendo UI</span>
                </li>
            </ul>
            <h4 className="skills-title">3-4 Years</h4>
            <ul className="skills-list">
                <li className="skills-list-item">
                    <span>jQuery</span>
                </li>
                <li className="skills-list-item">
                    <span>React</span>
                </li>
                <li className="skills-list-item">
                    <span>ESLint</span>
                </li>
                <li className="skills-list-item">
                    <span>AngularJS</span>
                </li>
                <li className="skills-list-item">
                    <span>Angular</span>
                </li>
                <li className="skills-list-item">
                    <span>TypeScript</span>
                </li>
                <li className="skills-list-item">
                    <span>RxJs</span>
                </li>
                <li className="skills-list-item">
                    <span>BootStrap</span>
                </li>
                <li className="skills-list-item">
                    <span>Material</span>
                </li>
                <li className="skills-list-item">
                    <span>SASS</span>
                </li>
            </ul>
            <h4 className="skills-title">1-2 Years</h4>
            <ul className="skills-list">
                <li className="skills-list-item">
                    <span>npm</span>
                </li>
                <li className="skills-list-item">
                    <span>Webpack</span>
                </li>
                <li className="skills-list-item">
                    <span>Babel</span>
                </li>
                <li className="skills-list-item">
                    <span>Express</span>
                </li>
                <li className="skills-list-item">
                    <span>socket.io</span>
                </li>
                <li className="skills-list-item">
                    <span>mongoDB</span>
                </li>
                <li className="skills-list-item">
                    <span>mongoose</span>
                </li>
            </ul>
            <h4 className="skills-title">Familiar</h4>
            <ul className="skills-list">
                <li className="skills-list-item">
                    <span>Adobe Illustrator</span>
                </li>
                <li className="skills-list-item">
                    <span>Adobe Photoshop</span>
                </li>
                <li className="skills-list-item">
                    <span>Adobe XD</span>
                </li>
                <li className="skills-list-item">
                    <span>Sketch</span>
                </li>
            </ul>
            <h4 className="skills-title">Devops</h4>
            <ul className="skills-list">
                <li className="skills-list-item">
                    <span>Linux</span>
                </li>
                <li className="skills-list-item">
                    <span>Apache</span>
                </li>
                <li className="skills-list-item">
                    <span>NGINX</span>
                </li>
                <li className="skills-list-item">
                    <span>git</span>
                </li>
            </ul>
            <h4 className="skills-title">
                <span>Other</span>
                <small className="small">Familiar</small>
            </h4>
            <ul className="skills-list">
                <li className="skills-list-item">
                    <span>C</span>
                </li>
                <li className="skills-list-item">
                    <span>Python</span>
                </li>
                <li className="skills-list-item">
                    <span>Shopify</span>
                </li>
                <li className="skills-list-item">
                    <span>Swift</span>
                </li>
                <li className="skills-list-item">
                    <span>Rust</span>
                </li>
                <li className="skills-list-item">
                    <span>php</span>
                </li>
                <li className="skills-list-item">
                    <span>WordPress</span>
                </li>
                <li className="skills-list-item">
                    <span>MySQL</span>
                </li>
                <li className="skills-list-item">
                    <span>Squarespace</span>
                </li>
            </ul>
        </SkillsListContainer>
    );
}