import * as React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../sections/footer/footer';
// import { useStaticQuery, graphql } from "gatsby"
import './layout.module.css';

const Layout = ({ children }) => (
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
