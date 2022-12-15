import * as React from "react"
import Section from "../../components/section/Section"
import * as styles from "./featSection.module.css"

const FeaturesSection = props => (
  <Section additionalStyles={styles.features}>
    <div className={styles.featuresTexts}>
        <p>Features integrated</p>
        <p>Know all our features that we have for accelerate your business.</p>
    </div>
  </Section>
)

export default FeaturesSection