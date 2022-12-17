import * as React from 'react';
import Footer from '../../sections/footer/footer';
// import { useStaticQuery, graphql } from "gatsby"
import './layout.module.css';

const Layout = ({ children }) =>
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

  (
    <>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 'var(--size-content)',
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );

export default Layout;
