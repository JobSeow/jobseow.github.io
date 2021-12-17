import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import IndividualHeaders from "../components/IndividualHeaders"
const title = "SmartBFA"
const text =
  "Smart BFA is a solution that aims to collect obstacle data and barrier-free routes around Singapore. The Advanced Data Collection application was a joint initiative between Disabled People's Association (DPA) Singapore and Mercurics Pte. Ltd"

const smartbfa = () => (
  <Layout header={false}>
    <IndividualHeaders title={title} text={text}></IndividualHeaders>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://res.cloudinary.com/ddbhv5umh/image/upload/v1639474530/job/image-1_oxqmjy.png"
        alt="header"
      ></img>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "70%", paddingBottom: "100px" }}>
        <Fade bottom>
          <p style={{ textAlign: "center", padding: "10px" }}>{text}</p>
        </Fade>
        <Fade bottom>
          <ul style={{ display: "table" }}>
            <li style={{ padding: "5px" }}>
              Featured on{" "}
              <a 
              style={{color: 'black', textDecoration: 'underline'}}
              href="https://www.channelnewsasia.com/cnainsider/is-technology-helping-the-disabled-with-problems-of-daily-living-772291">
                Channel News Asia
              </a>{" "}
              and{" "}
              <a 
              style={{color: 'black', textDecoration: 'underline'}}
              href="https://better.sg/blog/2021/05/24/interview-mercurics-team-smartbfa-mapping-accessibility/">
                better.sg
              </a>
              . <a 
              style={{color: 'black', textDecoration: 'underline'}}
              href="https://smartbfa.com/">SmartBFA</a> is a smart solution
              that aims to identify Singapore's barrier-free access (BFA) routes
              through crowdsourced sensor data.
            </li>
            <li style={{ padding: "5px" }}>
              I was the lead mobile developer of data collection app that will
              be released on Google play store/ Apple appstore for public use.
            </li>
            <li style={{ padding: "5px" }}>
              Successfully tested App with 25 volunteers and collected more than
              100 hours of data so far, with services thattrack the
              accelerometer, orientation, elevation, GPS changes of a phone.
            </li>
            <li style={{ padding: "5px" }}>
              Decreased debugging time by 50% by creating a bug reporting system
              with Crashalytics and Firebase.
            </li>
            <li style={{ padding: "5px" }}>
              Tech Stack: Flutter, Bloc package, Google Maps package, Firebase.
            </li>
            <li style={{ padding: "5px" }}>
              Sign up for a demo{" "}
              <a 
              style={{color: 'black', textDecoration: 'underline'}}
              target="_blank" href="https://smartbfa.com/volunteer">
                here
              </a>{" "}
            </li>
          </ul>
        </Fade>
      </div>
    </div>

  </Layout>
)
export default smartbfa
