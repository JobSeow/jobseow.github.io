import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import IndividualHeaders from "../components/IndividualHeaders"
const title = "GE Kopitiam Uncle"
const text =
  "GE Kopitiam Uncle is your average dude who drinks his favourite kopi gao while watching party candidates give out their flyers to the residents. He is well informed and overly-enthu to educate you on the different parties and what they stand for."

const kopitiam = () => (
  <Layout header={false}>
    <IndividualHeaders title={title} text={text}></IndividualHeaders>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://res.cloudinary.com/ddbhv5umh/image/upload/v1639538722/job/kopitiamuncle_movnk9.png"
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
              A chatbot that summarizes the different party manifestos in a
              factual and lighthearted manner.
            </li>
            <li style={{ padding: "5px" }}>
              This bot leverages on Google’s Dialogflow, a natural language
              processing (NLP) platform that can be used to build conversational
              applications.
            </li>

            <li style={{ padding: "5px" }}>
              Tech Stack: Google Dialogflow, Kommunicate,
              HTML, CSS.
            </li>
            <li style={{ padding: "5px" }}>
              Check it out <a 
              target="_blank"
              style={{color: 'black', textDecoration: 'underline'}}
              href="https://kopitiam-uncle.com/">here</a>{" "}
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  </Layout>
)
export default kopitiam
