import React, { Component } from 'react';
import { MdEmail, MdPhone, MdHome, MdHelpOutline, MdSettings, MdWork, MdSchool, MdCode } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';
import './resume.component.css';

export class ResumeViewComponent extends Component {

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
                <p>I am a full-stack web developer committed to responsive and intuitive user experiences. At Bombardier Aerospace, I digitize current QA business processes into enterprise web applications. I continually learn and experiment with emerging web technologies and open-source platforms.</p>
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
                      <span className="flex-m-shrink">HTML5, CSS/SASS/LESS, Javascript, Typescript, C#, T-SQL</span>
                    </div>
                  </li>

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Front-end Frameworks/Libraries</h3>
                      <span className="flex-m-shrink">AngularJS/Angular, Angular Material, Webpack, React, Bootstrap, Kendo UI, jQuery, Razor templates</span>
                    </div>
                  </li>

                  <li className="skills-list-item">
                    <div className="flex-m">
                      <h3 className="skills-title section-title mr-8">Back-end Frameworks/Libraries</h3>
                      <span className="flex-m-shrink">.NET Web Api, .NET MVC, ASP.NET SignalR, Entity Framework, Node.js, npm, Express, Mongoose</span>
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
                    <time className="experience-time">June 2017 ➔ Present</time>
                    <div className="flex-m">
                      <h3 className="experience-company section-title mr-8">Bombardier Aerospace</h3>
                      <span className="experience-title">Full Stack Developer</span>
                    </div>
                    <p className="experience-description">Design and develop enterprise-level web applications which digitize production floor and quality assurance workflows currently used to build the Global 5000/6500/7500/8000, Q Series, C Series, and Lear aircraft.</p>
                    <ul className="experience-tasks-list">
                      <li className="experience-tasks-list-item">
                        <span>Research and understand business workflow processes, identify functional requirements, outline project scope, timeline, and milestones, and create <em>Software Requirement Sheets</em></span>
                      </li>
                      <li className="experience-tasks-list-item">
                        <span>Design database schemas, workflow diagrams, and use case scenario models in <em>MS Visio</em></span>
                      </li>
                      <li className="experience-tasks-list-item">
                        <span>Import, normalize, and organize data from multiple internal data sources through <em>SSIS and C# console applications</em></span>
                      </li>
                      <li className="experience-tasks-list-item">
                        <span>Design user interface mockups and wireframe with <em>Adobe Photoshop and Illustrator</em></span>
                      </li>
                      <li className="experience-tasks-list-item">
                        <span>Develop efficient and performant database queries on millions of records accessed via <em>Entity Framework</em> and RESTful apis in <em>C# .NET Web API framework</em></span>
                      </li>
                      <li className="experience-tasks-list-item">
                        <span>Develop rich and intuitive user interfaces which display large datasets and complex workflows using <em>Angular 7, SASS, and Typescript</em></span>
                      </li>

                      <li className="experience-tasks-list-item">
                        <span>Create, teach, and review <em>coding standards and best practices</em> for interns and junior developers on team</span>
                      </li>
                    </ul>
                  </li>

                  <li className="experience-list-item">
                    <time className="experience-time">October 2016 ➔ May 2017</time>
                    <div className="flex-m">
                      <h3 className="experience-company section-title mr-8">Bombardier Aerospace</h3>
                      <span className="experience-title">Intern - Front End Developer</span>
                    </div>
                    <p className="experience-description">Developed and maintained web applications used by quality assurance team members to track and organize timelines, reports, and general tasks.</p>
                    <ul className="experience-tasks-list">
                      <li className="experience-tasks-list-item">
                        <span>Maintained and supported production web applications through an internal <em>ticketing system</em>, <em>git</em>, and source code changes to <em>C# (.NET MVC), Razor templates, HTML, CSS, and Javascript (jQuery)</em></span>
                      </li>
                      <li className="experience-tasks-list-item">
                        <span>Developed a real-time updated browser-based scrum board application to aide with general task management utilizing <em>ASP.NET SignalR, and jQuery UI</em></span>
                      </li>
                      <li className="experience-tasks-list-item">
                        <span>Redesigned UI/UX for dozens of internal web applications to improve visual consistency and user experience</span>
                      </li>
                      <li className="experience-tasks-list-item">
                        <span>Modernized multiple web applications to improve performance and separate back-end/front-end concerns by converting <em>.NET MVC/Razor</em> applications to <em>.NET Web API/AngularJS</em></span>
                      </li>
                    </ul>
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

            <section className="resume-projects">
              <h2>
                <span className="section-icon rotate-clockwise"><MdCode /></span>
                Projects
              </h2>
              <div className="section-body">
                <ul className="projects-list list-unstyled">

                <li className="projects-list-item">
                    <div className="flex-m">
                      <h3 className="projects-title section-title mr-8">Betical</h3>
                      <a className="projects-url"
                        href="http://www.screencanadianelit.ca/betical">http://www.screencanadianelit.ca/betical</a>
                      </div>
                    <p className="projects-description">A born-digital paragraph generator composed with remixed typed assemblage-letters.</p>
                  </li>

                  <li className="projects-list-item">
                    <div className="flex-m">
                      <h3 className="projects-title section-title mr-8">Humble Roots Media</h3>
                      <a className="projects-url"
                        href="http://www.humblerootsmedia.com">http://www.humblerootsmedia.com</a>
                      </div>
                    <p className="projects-description">Digital content creators based in Hamilton, Ontario.</p>
                  </li>

                  <li className="projects-list-item">
                    <div className="flex-m">
                      <h3 className="projects-title section-title mr-8">Zen HTML</h3>
                      <a className="projects-url"
                        href="https://github.com/jorsi/zen-html">https://github.com/jorsi/zen-html</a>
                      </div>
                    <p className="projects-description">An html templating library heavily-inspired by Google Polymer team's lit-html.</p>
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