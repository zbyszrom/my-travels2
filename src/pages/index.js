import React from "react"


import Layout from "../components/layout"
import Intro from "../components/intro"
import FeaturedPlaces from "../components/featuredPlaces"
import AboutMe from "../components/aboutMe"



const IndexPage = () => (
  <Layout>
    
    <Intro/>
    <FeaturedPlaces/>
    <AboutMe/>
    
  </Layout>
)

export default IndexPage
