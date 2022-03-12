import React from 'react'
import {graphql} from "gatsby";

const BlogPage = ({ data }) => {

    console.log('#######');
    console.log(data);

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>------------</span>
            <span>KLAUS WERNER</span>
            <span>------------</span>
        </div>
    )

}

export const pageQuery = graphql`
query myQuery {
  blog: allMarkdownRemark {
    posts: edges {
      node {
        frontmatter {
          author
          path
          title
        }
        excerpt
      }
    }
  }
}
`


export default BlogPage;