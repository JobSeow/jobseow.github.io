import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = props => {
  console.log(props)
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          {props.header ? (
            <>
              <div
                role="button"
                onClick={() => scrollTo("#home")}
                className="name"
                tabIndex={0}
              >
                Portfolio.
              </div>
              <div className="links-wrapper">
                <button onClick={() => scrollTo("#projects")}>Projects</button>
                <button onClick={() => scrollTo("#work")}>Work</button>
                <button onClick={() => scrollTo("#about")}>About</button>
                <button onClick={() => scrollTo("#contact")}>Contact</button>
              </div>
            </>
          ) : (
            <button
              style={{
                textDecoration: "underline",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => window.history.back()}
            >
              <span style={{ fontWeight: "bold" }}>Back</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
