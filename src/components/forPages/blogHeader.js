import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getHeader = graphql `
query headerImages {
    data: allDatoCmsAsset(filter: {filename: {in: ["dolomity19.jpg", "rawenna19.jpg"]}}) {
        edges {
          node {
                fluid {
                    ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      
`

const BlogHeader = () => {
    const {data} = useStaticQuery(getHeader)
    const header = data.edges
    return(
        <section>
            <h3>Blog</h3>
            <Img fluid = {header[0].node.fluid} />
            <Img fluid = {header[1].node.fluid} />

        </section>
      
    )
}
export default BlogHeader