import React from 'react'
import { Link, graphql } from 'gatsby'
import fuzzyFilterFactory from 'react-fuzzy-filter'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const keys = {
  TITLE: 'node.frontmatter.title',
  DATE: 'node.frontmatter.date',
  EXCERPT: 'node.excerpt',
}
const { TITLE, DATE, EXCERPT } = keys

const { InputFilter, FilterResults } = fuzzyFilterFactory()

const fuzzySearchOptions = {
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 3,
  keys: [TITLE, DATE, EXCERPT],
}

const parseSlugToTitle = slug => {
  if (typeof slug === 'string') {
    let t = slug.split('/')
    t = t[t.length - 2]
    t = t.replace('-readme', '')
    t = t.replace(/_/g, ' ')
    t = t.replace(/-/g, ' ')

    return t
  } else return 'title'
}

class BlogIndex extends React.Component {
  state = {
    isAsc: false,
    posts: [],
    query: '',
  }
  handleClick = this.handleClick.bind(this)

  handleClick() {
    this.setState({
      isAsc: !this.state.isAsc,
      posts: this.state.posts.reverse(),
    })
  }

  componentDidMount() {
    this.setState({ posts: this.props.data.allMarkdownRemark.edges })
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <Bio />

        <div className="fuzzy-input">
          <InputFilter debounceTime={200} />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .fuzzy-input input {
                  outline: none;
                  width: 100%;
                  border: solid 1.2px #333333;
                  border-radius: 5px;
                  padding: 5px 10px;
                  box-shadow: 0 2px 10px #eeeeee;
                }
              `,
            }}
          />
        </div>

        <FilterResults items={this.state.posts} fuseConfig={fuzzySearchOptions}>
          {filteredItems => {
            console.log('filtered items')
            console.log(filteredItems)
            console.log('posts')
            console.log(this.state.posts)
            return filteredItems.map(({ node }) => {
              const date = node.frontmatter.date || 'when the wind blew'
              const title =
                node.frontmatter.title || parseSlugToTitle(node.fields.slug)

              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>date: {date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              )
            })
          }}
        </FilterResults>

        {}

        <button
          style={{
            position: 'fixed',
            right: 20,
            bottom: 15,
            color: this.state.isAsc ? 'white' : 'black',
            width: 50,
            height: 50,
            borderRadius: 999,
            padding: 3,
            border: 'solid 2px #333333',
            backgroundColor: this.state.isAsc ? 'black' : 'white',
            outline: 'none',
            boxShadow: '0 1px 3px #cccccc',
          }}
          onClick={this.handleClick}
        >
          {this.state.isAsc ? 'up' : 'dn'}
        </button>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
