import * as React from 'react';
import Section from '../../components/section/Section';
import * as styles from './heroSection.module.css';

const HeroSection = (props) => (
  <Section additionalStyles={styles.hero}>
    <div className={styles.heroContent}>
      <p>Join in and connect</p>
      <h1>
        To faster your innovation potential
      </h1>
      <p>
        AcceleratorApp Innovation Community — Tools and community to facilitate
        innovation between all members of our community
      </p>
      <button className={styles.demoBtn}>
        Schedule a Demo
      </button>
    </div>
    <img src="Video.svg" alt="template" className={styles.heroImage} />
    <img src="chat.svg" alt="chat-icon" className={styles.chatIcon} />
  </Section>
);

export default HeroSection;
