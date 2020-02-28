import React from'react'
import { useStaticQuery, graphql } from 'gatsby'
import  {Link } from 'gatsby'
import Location from './location'

const getLocations = graphql`
query {
    featuredLocations: allDatoCmsPlace(filter: { featured: { eq: true } }) {
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

const FeaturedLocations = () => {
    const response = useStaticQuery(getLocations)
    const locations = response.featuredLocations.edges
    return(
        <section>
            <h4>Featured Locations</h4>
            {locations.map(({node}) => {
                return <Location key={node.id} location = {node}/>

            })}
            <Link to = '/locations'>
                <h4>All locations</h4>
            </Link>
        </section>
        
    )
}
export default FeaturedLocations