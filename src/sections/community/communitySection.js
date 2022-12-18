/* eslint-disable */

import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import CommunityCard from '../../components/communityCard/communityCard';
import Section from '../../components/section/Section';
import * as styles from './commSection.module.css';
import { communities } from '../../static/data';

const CommunitySection = () => {
  const data = useStaticQuery(graphql`
  query Data {
    features: allFile(filter: {name: {regex: "/^featureIcon/"}}) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            gatsbyImageData(width: 100)
          }
        }
      }
    }
  }
`)

const icons = data.features.edges

  return(
    <Section additionalStyles={styles.community}>
    <ul className={styles.featureIcons} style={{ color: 'black' }}>
      {icons.map((icon, i) => (
        <li key={i} className={styles.featIcon}>
          <GatsbyImage image={getImage(icon.node.childImageSharp)} />
        </li>
      ))}
    </ul>
    <div className={styles.communityTexts}>
      <p>Community</p>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className={styles.cardsContainer}>
      {communities.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))}
    </div>
  </Section>
  )
}


export default CommunitySection;
