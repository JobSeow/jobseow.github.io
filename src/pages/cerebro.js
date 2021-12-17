import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import IndividualHeaders from "../components/IndividualHeaders"
const title = "Cerebro"
const text =
  "Our project aims to provide a platform that will harness untapped data from public online sources to reveal population sentiment, what people are talking about and how they feel, undergo people profiling, and provide population segmentation"

const cerebro = () => (
  <Layout header={false}>
    <IndividualHeaders title={title} text={text}></IndividualHeaders>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://res.cloudinary.com/ddbhv5umh/image/upload/v1639537184/job/cerebro_jsyo4t.png"
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
              Final year project with client{" "}
              <a
               target="_blank"
               style={{color: 'black', textDecoration: 'underline'}}
              href="https://mercurics.com/">Mercurics</a>{" "}
            </li>
            <li style={{ padding: "5px" }}>
              Delivered the first platform to harness data and generate insights
              into population construct andsentiment by working with the CEO and
              consultant to develop a data-gathering NLP and ML engine
            </li>
            <li style={{ padding: "5px" }}>
              As Lead System Architect, designed a highly available and
              performant infrastructure, containerized services with docker,
              ensured CI/CD of services to AWS Elastic Beanstalk and S3 buckets
              with TravisCI.
            </li>

            <li style={{ padding: "5px" }}>
              Tech Stack: VueJS, Django
            </li>
            <li style={{ padding: "5px" }}>
              Check it out{" "}
              <a 
              target="_blank"
              style={{color: 'black', textDecoration: 'underline'}}
              href="http://www.cerebro.tk.s3-website-ap-southeast-1.amazonaws.com/science">here</a>{" "}
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  </Layout>
)
export default cerebro
