import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
    query($slug: String!) {
    post: datoCmsPost(slug: {eq: $slug}) {
            title
            contentNode {
                childMarkdownRemark {
                  html
                }
              }
            image {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
    }

`

const Template = ({data})=> {

    const {title, contentNode, image} = data.post
    const content = contentNode.childMarkdownRemark.html

    return (
        <Layout>
            <h1>{title}</h1>
            {/*<Img fluid = {image.fluid}/>*/}
            <div dangerouslySetInnerHTML={{ __html: content }}/> 


        </Layout>
    )

}
export default Template