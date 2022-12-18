import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import FeatureCard from '../../components/featureCard/featureCard';
import Section from '../../components/section/Section';
import * as styles from './featSection.module.css';
import { features } from '../../../public/static/data';

const FeaturesSection = () => (
  <Section additionalStyles={styles.features}>
    <StaticImage
      src="../../images/featuresBackground.svg"
      width={1700}
      height={1700}
      style={{ position: 'absolute', zIndex: -1 }}
    />
    <div className={styles.featuresTexts}>
      <p>Features integrated</p>
      <p>Know all our features that we have for accelerate your business.</p>
    </div>
    <div className={styles.featuresContainer}>
      {features.map((feature) => (
        <FeatureCard key={feature} feature={feature} />
      ))}
      <button type="button" className={styles.discoverBtn}>Discover its functions →</button>
    </div>
    <button type="button" className={styles.discoverBtnMob}>Discover its functions →</button>
  </Section>
);

export default FeaturesSection;
