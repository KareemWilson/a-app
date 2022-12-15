import * as React from 'react';
import * as styles from './featCard.module.css'

const FeatureCard = ({ feature }) => (
    <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>
            <img className={styles.icon} src={feature.icon} alt='card-title-icon' />
            <p className={styles.cardTitle}>{feature.title}</p>
        </div>
        <p className={styles.featureDiscription}>{feature.discription}</p>
    </div>
)

export default FeatureCard;