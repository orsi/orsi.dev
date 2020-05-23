import './Automata.scss';
import React from 'react';
import { AutomataService } from '../../../services/automata.service';

export default class Automata extends React.Component {
  automataService;
  componentDidMount() {
    this.automataService = new AutomataService(document.querySelector('#hero-background'), true);
    this.automataService.start();
  }

  render() {
    return (
      <div id="header">

        <div id="hero-background"></div>

        <div className="hero">
{/* 
          <div className="hero-flex">
            <div className="left">

              <h1 className="hero-title">Jonathon Orsi</h1>


            </div>
            <div className="right">

              <nav className="navigation-main">
                <ul className="navigation-list">
                  <li className="navigation-list-item">
                    <a href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="navigation-list-item">
                    <a href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="navigation-list-item">
                    <a href="#work">
                      Work
                    </a>
                  </li>
                </ul>
              </nav>

            </div>
          </div> */}
{/*           
          <p className="hero-paragraph">
            <em>Hello!</em> I'm Jonathon Orsi, a developer and designer based in Toronto, Canada.
          </p>
          <p className="hero-currently">
            I specialize in web development and user experience. You'll also find me playing music on <a href="https://www.youtube.com/watch?v=eyLexd5MCCw&feature=youtu.be&t=14">some</a> <a href="https://www.youtube.com/watch?v=zOHUfhNQsoc&feature=youtu.be&t=1231">sort of</a> <a href="http://jojogun.ca">instrument</a>. Currently looking for new work, so if you are looking for a developer or designer, <a href="mailto:jonathon.orsi@gmail.com">let me know.</a>
          </p> */}
        </div>

      </div>
    );
  }
}
