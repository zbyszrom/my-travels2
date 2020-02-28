import React from 'react'
import Layout from '../components/layout'
import BlogHeader from '../components/forPages/blogHeader'
import ForBlog from '../components/forPages/forBlog'
const Blog = () => {
    return (
        <Layout>
          <BlogHeader/>
          <ForBlog/>  
        </Layout>
    )
}

export default Blog
