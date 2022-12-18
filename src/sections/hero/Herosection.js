import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '../../components/section/Section';
import * as styles from './heroSection.module.css';

const HeroSection = () => (
  <Section additionalStyles={styles.hero}>
    <StaticImage
      src="../../images/Background.svg"
      width={2000}
      height={900}
      style={{ position: 'absolute', top: 0, zIndex: -1 }}
      quality={100}
    />
    <div className={styles.heroContent}>
      <p>Join in and connect</p>
      <h1>To faster your innovation potential</h1>
      <p>
        AcceleratorApp Innovation Community — Tools and community to facilitate
        innovation between all members of our community
      </p>
      <button type="button" className={styles.demoBtn}>
        Schedule a Demo
      </button>
    </div>
    <StaticImage src="../../images/Video.png" alt="videoImage" quality={100} />
    <StaticImage
      src="../../images/chat.svg"
      alt="chat-icon"
      className={styles.chatIcon}
      quality={100}
    />
  </Section>
);

export default HeroSection;
