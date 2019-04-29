import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navigation from './navigation';
import Landing from './landing';
import Speakers from './speakers';
import Tickets from './tickets';
import Schedule from './schedule';
import Sponsors from './sponsors';

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main>
        <Navigation />
        <Landing/>
        <Speakers />
        <Tickets/>
        <Schedule/>
        <Sponsors/>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
