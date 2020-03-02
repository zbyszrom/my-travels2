/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result;
      })
    )
   });


// Implement the Gatsby API "createPages". This is called once the
   // data layer is bootstrapped to let plugins create pages from data.
   exports.createPages = ({ actions, graphql }) => {
     const { createPage } = actions;
     const postTemplate = path.resolve(`src/templates/post.js`)
     const locationTemplate = path.resolve(`src/templates/singleLocation.js`)

           // Create pages for each location.
 const getLocation = makeRequest(graphql, `
 {
  allDatoCmsPlace
   {
     edges {
       node {
         id
         slug
       }
     }
   }
 }
 `).then(result => {
    result.data.allDatoCmsPlace.edges.forEach(({ node }) => {
   createPage({
     path: `locations/${node.slug}`,
     component: locationTemplate,
     context: {
        slug: node.slug,
     },
   })
 })
});
 // Create pages for each post.
const getPost = makeRequest(graphql, `
 {
  allDatoCmsPost
   {
     edges {
       node {
         id
         slug
       }
     }
   }
 }
 `).then(result => {
    result.data.allDatoCmsPost.edges.forEach(({ node }) => {
   createPage({
     path: `blog/${node.slug}`,
     component: postTemplate,
     context: {
        slug: node.slug,
     },
   })
 })
});

return Promise.all([getLocation, getPost])



}
