import React from "react"


import Layout from "../components/layout"
import Intro from "../components/intro"
import FeaturedLocations from "../components/featuredLocations"
import AboutMe from "../components/aboutMe"



const IndexPage = () => (
  <Layout>
    
    <Intro/>
    <FeaturedLocations/>
    <AboutMe/>
    
  </Layout>
)

export default IndexPage
