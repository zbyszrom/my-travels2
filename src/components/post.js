import React from 'react'
import { Link} from 'gatsby'

const Post = ({post}) => {

    const {title, slug} = post

    return (
        <Link to={`/blog/${slug}`} > 
    <p>{title}</p>
    </Link >
    )
}

export default Post
