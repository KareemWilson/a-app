import * as React from "react"
import * as styles from './header.modules.css'

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
  </header>
)

export default Header
