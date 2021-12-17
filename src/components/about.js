import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div
          className="about-section"
          style={{
            paddingLeft: "250px",
            paddingRight: "250px",
          }}
        >
          <div
            className="content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Fade bottom cascade>
              <h1 style={{ textAlign: "left" }}>About Me</h1>
            </Fade>
            <div
              style={{
                width: "80%",
              }}
            >
              <p>
                {data.aboutParaOne}
                <br></br>
                <br></br>
                {data.aboutParaTwo}
                <br></br>
                <br></br>
                {data.aboutParaThree}
              </p>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
