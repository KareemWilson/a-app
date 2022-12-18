import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes, { string } from 'prop-types';
import * as styles from './commCard.module.css';

const CommunityCard = ({ community }) => {
  const {
    title,
    icon,
    discription,
    features,
  } = community;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleContainer}>
        <img src={icon} className={styles.icon} alt="card-title-icon" />
        <p className={styles.cardTitle}>{title}</p>
      </div>
      <p className={styles.cardDescrip}>{discription}</p>
      <div className={styles.border} />
      <ul className={styles.cardFeatures}>
        <li key="title">Popular Features</li>
        {features.map((feature, i) => (
          <li key={i} className={styles.feature}>
            <StaticImage src="../../images/check.svg" alt="check" quality={100} />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
      <button type="button" className={styles.cardButton}>
        Get Started
      </button>
    </div>
  );
};

CommunityCard.propTypes = {
  community: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(string).isRequired,
  }).isRequired,
};

export default CommunityCard;
