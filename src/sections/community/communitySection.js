import * as React from "react"
import CommunityCard from "../../components/communityCard/communityCard"
import Section from "../../components/section/Section"
import * as styles from "./commSection.module.css"

const icons = [
  {
    name: "featureIcon1",
    source: "featureIcon1.svg",
  },
  {
    name: "featureIcon2",
    source: "featureIcon2.svg",
  },
  {
    name: "featureIcon3",
    source: "featureIcon3.svg",
  },
  {
    name: "featureIcon4",
    source: "featureIcon4.svg",
  },
  {
    name: "featureIcon5",
    source: "featureIcon5.svg",
  },
]

const CommunitySection = props => (
  <Section additionalStyles={styles.community}>
    <ul className={styles.featureIcons} style={{ color: "black" }}>
      {icons.map((icon) => (
        <li className={styles.featIcon}>
            <img src={icon.source} alt={icon.name} />
        </li>
      ))}
    </ul>
    <div className={styles.communityTexts}>
        <p>Community</p>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className={styles.cardsContainer}>
        
    </div>
  </Section>
)

export default CommunitySection
