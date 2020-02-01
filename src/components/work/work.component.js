import React, { Component } from 'react';
import { MdEmail, MdPhone, MdHome, MdHelpOutline, MdSettings, MdWork, MdSchool, MdCode } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';
import './work.component.css';

export class WorkComponent extends Component {

  render() {
    return (
      <div className="resume">
        <div className="container">
          <header className="resume-header">
            <h1>Jonathon Orsi</h1>

            <section className="resume-contact">
              <div className="section-body">
                <ul className="contacts-list list-unstyled">

                  <li className="contacts-list-item">
                    <MdEmail />
                    <a className="contacts-link"
                      href="mailto:jonathon.orsi@gmail.com">jonathon.orsi@gmail.com</a>
                  </li>

                  <li className="contacts-list-item">
                    <MdPhone />
                    <a className="contacts-link"
                      href="tel:+14165568990">416-556-8990</a>
                  </li>

                  <li className="contacts-list-item">
                    <GoMarkGithub />
                    <a className="contacts-link"
                      href="https://github.com/jorsi">github.com/jorsi</a>
                  </li>

                  <li className="contacts-list-item">
                    <MdHome />
                    <a className="contacts-link"
                      href="http://jonorsi.com">jonorsi.com</a>
                  </li>
                </ul>

              </div>
            </section>
          </header>

          <main className="resume-main">
            <section className="resume-about">
              <h2>
                <span className="section-icon"><MdHelpOutline /></span>
                About
              </h2>
              <div className="section-body">
                <p>I am a software developer committed to responsive and intuitive user experiences. At Bombardier Aerospace, I digitize current QA business processes into enterprise web applications. I continually learn and experiment with emerging web technologies and open-source platforms.</p>
              </div>
            </section>

            <section className="resume-skills">
              <h2>
                <span className="section-icon"><MdSettings /></span>
                Skills
              </h2>
              <div className="section-body">
                <ul className="skills-list list-unstyled">

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Languages</h3>
                      <span className="flex-m-shrink">HTML5, CSS/SASS/LESS, Javascript, Typescript, C#, T-SQL, Rust</span>
                    </div>
                  </li>

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Front-end</h3>
                      <span className="flex-m-shrink">AngularJS/Angular, Angular Material, Webpack, React, Bootstrap, Kendo UI, jQuery, Razor templates</span>
                    </div>
                  </li>

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Back-end</h3>
                      <span className="flex-m-shrink">.NET Web Api, .NET MVC, SignalR, Entity Framework, Node.js, npm, Express, Mongoose</span>
                    </div>
                  </li>

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Databases</h3>
                      <span className="flex-m-shrink">SQL Server 2012, MySQL, MongoDB</span>
                    </div>
                  </li>

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Testing</h3>
                      <span className="flex-m-shrink">Mocha, Chai</span>
                    </div>
                  </li>

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Software</h3>
                      <span className="flex-m-shrink">Adobe Photoshop, Adobe Illustrator, MS Visio, SQL Management Studio, SSIS, Visual Studio, VS Code</span>
                    </div>
                  </li>

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Methods</h3>
                      <span className="flex-m-shrink">Agile development, git version control and GitHub, unit testing, UX/UI/Responsive design</span>
                    </div>
                  </li>

                </ul>
              </div>
            </section>

            <section className="resume-experience">
              <h2>
                <span className="section-icon" style={{ 'transform': 'rotate(-10deg)' }}><MdWork /></span>
                Experience
              </h2>
              <div className="section-body">
                <ul className="experience-list list-unstyled">
                  <li className="experience-list-item">
                    <time className="experience-time">June 2019 ➔ February 2020</time>
                    <div className="flex-m">
                      <h3 className="experience-company section-title mr-8">Bombardier Aerospace</h3>
                      <span className="experience-title">Senior Software Developer</span>
                    </div>
                    <p className="experience-description">Manage and guide the development platform used by many quality and production teams within the Bombardier De Havilland facility. Responsibilities include collaborating with teams to understand and improve business processes, training and project managing junior developers and student interns, and improving overall development experience.</p>
                    <div className="experience-highlight">
                      Project managed junior developers and ensured the successful development and publishing of a scheduling application. Improved new web application development by reducing build-time from <em>several minutes to seconds</em>.
                    </div>
                  </li>
                  <li className="experience-list-item">
                    <time className="experience-time">June 2017 ➔ May 2019</time>
                    <div className="flex-m">
                      <h3 className="experience-company section-title mr-8">Bombardier Aerospace</h3>
                      <span className="experience-title">Full Stack Developer</span>
                    </div>
                    <p className="experience-description">Develop, design, and maintain 6 enterprise-level web applications, 12 web reports, and 24 SSIS packages for teams producing the Global series aircraft.</p>
                    <div className="experience-highlight">
                      Modernized multiple web applications to improve performance and separate back-end/front-end concerns by converting <em>.NET MVC/Razor</em> applications to <em>.NET Web API/AngularJS</em>
                    </div>
                  </li>

                  <li className="experience-list-item">
                    <time className="experience-time">October 2016 ➔ May 2017</time>
                    <div className="flex-m">
                      <h3 className="experience-company section-title mr-8">Bombardier Aerospace</h3>
                      <span className="experience-title">Intern - Front End Developer</span>
                    </div>
                    <p className="experience-description">Maintained web applications used by quality assurance team members to track and organize timelines, reports, and general tasks.</p>
                    <div className="experience-highlight">Created a drag-and-drop digital scrum-board web application for teams to organize and easily share tasks and ideas. Technologies included <em>C# .NET MVC, SignalR, and jQuery UI</em>.</div>
                  </li>

                </ul>

              </div>
            </section>

            <section className="resume-education">
              <h2>
                <span className="section-icon"  style={{ 'transform': 'rotate(10deg)' }}><MdSchool /></span>
                Education
              </h2>
              <div className="section-body">
                <ul className="education-list list-unstyled">

                  <li className="education-list-item">
                    <time className="education-time">September 2014 ➔ April 2017</time>
                    <div className="flex-m">
                      <h3 className="education-school section-title mr-8">George Brown College</h3>
                      <span className="education-program">Advanced Diploma in Computer Programming and Systems Analysis</span>
                    </div>
                  </li>

                  <li className="education-list-item">
                    <time className="education-time">September 2008 ➔ April 2013</time>
                    <div className="flex-m">
                      <h3 className="education-school section-title mr-8">University of Toronto</h3>
                      <span className="education-program">Honours Bachelor of Arts in Philosophy and Latin</span>
                    </div>
                  </li>

                </ul>
              </div>
            </section>

          </main>

        </div>
      </div>
    );
  }
}