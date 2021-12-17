import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import IndividualHeaders from "../components/IndividualHeaders"
const title = "TRBC Website"
const text =
  "Built a Full Stack Web App for Thompson Road Baptist Church which consists of a user base of ~500."

const trbc = () => (
  <Layout header={false}>
    <IndividualHeaders title={title} text={text}></IndividualHeaders>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://res.cloudinary.com/ddbhv5umh/image/upload/v1639707307/job/trbc2_xjjczu.png"
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
            Tech stack used: NextJS, Tailwind CSS, ExpressJS, MongoDB
            </li>
            <li style={{ padding: "5px" }}>
              Check it out{" "}
              <a 
              target="_blank"
              href="https://sgtrbc.vercel.app/">here</a>{" "}
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  </Layout>
)
export default trbc
