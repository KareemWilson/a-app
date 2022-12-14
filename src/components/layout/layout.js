import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import "./layout.module.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         sections {
  //           heroSection {
  //             name
  //             age
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Kareem wilson</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
