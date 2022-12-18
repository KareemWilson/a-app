import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './featCard.module.css';

const FeatureCard = ({ feature }) => {
  const {
    title,
    icon,
    discription,
  } = feature;

  return (
    <div className={styles.cardContainer}>
      <div>
        <img className={styles.icon} src={icon} alt="card-title-icon" />
        <p className={styles.cardTitle}>{title}</p>
      </div>
      <p className={styles.featureDiscription}>{discription}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureCard;
