import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import header from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={header.header}>
    <div>
      <h1>
        <Link className={header.nav__link}
          to="/"        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
