import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import WorkHistory from "../components/WorkHistory"
const IndexPage = () => (
  <Layout header ={true}>
    <SEO title="Job Seow" />
    <Header></Header>
    <Projects></Projects>
    <WorkHistory></WorkHistory>
    <About></About>
    {/* <Skills></Skills> */}
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
  </Layout>
)

export default IndexPage
