import React from 'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Image from "gatsby-image"

 

  const getImage = graphql`
  query {
    Bcg: datoCmsAsset(filename: {eq: "dolomity19.jpg"}) {
        fluid {
            ...GatsbyDatoCmsFluid
        }
      }
  }
`
const Hero = () => {
    const data = useStaticQuery(getImage)

    return (
       
        <BackgroundImage 
            fluid = {data.Bcg.fluid} style= {{minHeight: "calc(100vh - 200px)", minWidth: "100vw", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            
            <h2>Ciekawe miejsca</h2>
            <p>w kraju i na świecie</p> 
            <Link to = "./locations">Wędruj ze mną</Link>  
            
            
        </BackgroundImage>
        
          
         
         
          
    )
}
export default Hero