import React from "react"
import "../styles/style.css"
import Fade from "react-reveal/Fade"

const WorkHistory = props => {
  return (
    <section class="projects" id="work">
      <div class="content-wrap item-details divider">
        {/* <h2>Work Experience</h2>
        <p>See my complete work history on <a
            href="https://sg.linkedin.com/in/job-seow-jian-liang-4065b2172">LinkedIn</a>.</p>
   */}
        <Fade bottom >
          <h1 style={{ fontSize: "3rem", lineHeight: "20px", textAlign: 'center' }}>Work History</h1>
        </Fade>
        <section class="job-item">
          <div>
            <h3>Software Engineer</h3>
            <p>J.P. Morgan</p>
            <p>Aug 2021</p>
          </div>
          <div>

            <p>Key contributions:</p>
            <ul>
              <li>
              Corporate Investment Banking:
              </li>
              <li>
              Primarily working on a ReactJs/Java/Springboot application
              </li>
            </ul>
          </div>
        </section>
        <hr/>
        <section class="job-item">
          <div>
            <h3>Mobile Developer (Contract)</h3>
            <p>Mercurics (SmartBFA)</p>
            <p>Feb 2021 – Aug 2021</p>
          </div>
          <div class="job-summary">
          
            <p>Key contributions:</p>
            <ul>
              <li>
                Successfully designed, developed, and deployed a navigation app
                optimized for wheelchair-bound users. Application developed with
                Flutter & supports both Android and iOS users.
              </li>
              <li>
                Developed core services (E.g. Sensor, Elevation, Location
                tracking) of application, written in native Kotlin and Swift,
                that can run as background services.
              </li>
              <li>
                Designed bug reporting system with Crashalytics & Firebase,
                saving debugging time.
              </li>
              <li>
              Currently working on a volunteer basis from Aug 2021 - Present
              </li>
             
              <li>
                Tech Stack: Flutter, Bloc package, Google maps package, Firebase
              </li>
            </ul>
          </div>
        </section>
        <hr/>
        <section class="job-item">
          <div>
            <h3>Software Engineer Summer Analyst (Intern)</h3>
            <p>J.P. Morgan</p>
            <p>Jul 2020 – Aug 2020</p>
          </div>
          <div>

            <p>Key contributions:</p>
            <ul>
              <li>
                Selected as one of 30+ nationwide for this internship for this
                internship for prospective candidates based on leadership
                potential and aptitude for growth.
              </li>
              <li>
              Due to my work, a full-time offer was made.
              </li>
            </ul>
          </div>
        </section>
        <hr/>

        <section class="job-item">
          <div>
            <h3>Full Stack Developer (Intern)</h3>
            <p>Urban Redevelopment Authority of Singapore (URA).</p>
            <p>May 2019 – Aug 2019</p>
          </div>
          <div>

            <p>Key contributions:</p>
            <ul>
              <li>
                Designed and Developed new features for in-house Chat-bot with
                React, Redux and Express Framework
              </li>
              <li>
                Eliminated manual coding processes by migrating bot from
                rule-base system to a Natural Language Processing(NLP) system on
                Rasa Platform.
              </li>
              <li>
                Improve response time, automate repetitive queries by using ML
                techniques like Intent Classification, Named Entity Recognition.{" "}
              </li>
              <li>
                Decoupled and containerized the front end and back end
                application into two applications using Docker. Increasing
                modularity and maintainability.
              </li>
              <li>
                Contributor to open source RasaUI project by updating front end
                (AngularJS) & back end (Express) to match updated REST endpoints
                of Rasa 2.0.
              </li>
              <li>
                38 pulls from 
                <a 
                style={{color: 'black', textDecoration: 'underline'}}
                target="_blank" href="https://hub.docker.com/r/jobseow/rasaui_2.0">
                Docker Repository
              </a>{" "}
                
              </li>
            </ul>
            <p>Tech Stack: ReactJS, Python, Rasa ML-Framework</p>
          </div>
        </section>
        <hr/>
        <section class="job-item">
          <div>
            <h3>Undergraduate Researcher (Intern)</h3>
            <p>The Centre for Liveable Cities</p>
            <p>May 2018 – Jul 2018</p>
          </div>
          <div>
         
            <p>Key contributions:</p>
            <ul>
              <li>
                Collected and researched about the Smart City Climate in
                Southeast Asia
              </li>
              <li>
                Successfully coordinated liaison operations for World Cities
                Summit
              </li>
              <li>
                Conducted network analysis of the visiting delegates and their
                meetings for WCS.
              </li>
            </ul>
            <p>Tech Used: Tableau, SAS Enterprise Guide</p>
          </div>
        </section>

      </div>
    </section>
  )
}

export default WorkHistory
