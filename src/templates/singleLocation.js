import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    location: datoCmsPlace(slug: { eq: $slug }) {
      name
      country 
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }

      images {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

const Template = ({data})=> {

    const {
        name,
        descriptionNode,
        images,
        country,
        } = data.location
        const description = descriptionNode.childMarkdownRemark.html

    return (
        <Layout>
            <h1>{name}</h1>
            <h4>{country}</h4>
            <div dangerouslySetInnerHTML={{ __html: description }}/> 
            {images.map((image, index) => {
              return (
                <Img
                  key={index}
                  fluid={image.fluid}
                  
                 
                />
              )
            })}  
        </Layout>
    )

}
export default Template