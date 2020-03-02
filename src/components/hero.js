import React from 'react'
import {Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


 const Hero = ({children}) => {

  

    return (

          
          <div>
          <h2>Ciekawe miejsca</h2>
          <p>w kraju i na świecie</p> 
          <Link to = "./locations">Wędruj ze mną</Link>
          </div>
         
          
    )
}
export default Hero