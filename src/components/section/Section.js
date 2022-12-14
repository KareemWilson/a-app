import * as React from "react"
import * as styles from "./section.module.css"

const Section = props => (
  <>
    <div className={styles.section}>{props.children}</div>
  </>
)

export default Section
