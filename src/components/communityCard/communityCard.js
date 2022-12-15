import * as React from 'react';
import * as styles from './commCard.module.css'

const CommunityCard = ({ community }) => (
    <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>
            <img className={styles.icon} src={community.icon} alt='card-title-icon' />
            <p className={styles.cardTitle}>{community.title}</p>
        </div>
        <p>{community.discription}</p>
        <div className={styles.border}></div>
        <ul className={styles.cardFeatures}>
            <li className={styles.cardFeaturesTitle}>Popular Features</li>
            {community.features.map((feature) => (
                <li className={styles.feature}>
                    <img src='check.svg' alt='check' />
                    <p>{feature}</p>
                </li>
            ))}
        </ul>
        <button className={styles.cardButton}>Get Started</button>
    </div>
)

export default CommunityCard;