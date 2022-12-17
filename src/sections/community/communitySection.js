import * as React from 'react';
import CommunityCard from '../../components/communityCard/communityCard';
import Section from '../../components/section/Section';
import * as styles from './commSection.module.css';
import { communities, icons } from '../../../public/static/data';

const CommunitySection = () => (
  <Section additionalStyles={styles.community}>
    <ul className={styles.featureIcons} style={{ color: 'black' }}>
      {icons.map((icon) => (
        <li key={icon.id} className={styles.featIcon}>
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
      {communities.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))}
    </div>
  </Section>
);

export default CommunitySection;
