import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Location from '../location'

const getLocations = graphql`
query {
    allLocations: allDatoCmsPlace {
        edges {
          node {
            images {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
            name
            slug
            country
           id          
          }
        }
      }
}
`


const ForLocations = () => {
    const response = useStaticQuery(getLocations)
    const locations = response.allLocations.edges

    return (
        <div>
           <p>All locations</p> 
           {locations.map(({node}) => {
                return <Location key={node.id} location = {node}/>

            })}
        </div>
    )
}

export default ForLocations
