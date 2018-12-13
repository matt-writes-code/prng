import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, github, sites } = data.site.siteMetadata
        const { playground, playgroundDataviz } = sites
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: rhythm(2.5),
            }}
          >
            <div style={{ display: 'flex' }}>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: '100%',
                }}
              />
              <p>
                Written by <strong>{author}</strong> who lives and works in
                Tokyo building random things. His stuff is on github as{' '}
                <a href={`https://github.com/${github}`} target="_blank">
                  {github ? github : 'someone'}
                </a>
                .
              </p>
            </div>
            <div>
              <code>
                playground: <a href={playground}>{playground}</a>
              </code>
              <br />
              <code>
                dataviz: <a href={playgroundDataviz}>{playgroundDataviz}</a>
              </code>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        github
        sites {
          playground
          playgroundDataviz
        }
      }
    }
  }
`

export default Bio
