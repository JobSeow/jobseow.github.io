import React from "react"
import Fade from "react-reveal/Fade"


const Header = (props) => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">

          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {props.title}
              </h1>
            </div>
          </Fade>
       
        </div>
      </div>
    </div>
  )
}

export default Header
