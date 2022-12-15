import * as React from 'react';
import * as styles from './commCard.module.css'

const CommunityCard = () => (
    <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>
            <img src='' alt='card-title-icon' />
            <p className={styles.cardTitle}>coporations</p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <div className={styles.border}></div>
        <ul className={styles.cardFeatures}>
            <li className={styles.cardFeaturesTitle}>Popular Features</li>
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
        </ul>
        <button className={styles.cardButton}>Get Started</button>
    </div>
)

export default CommunityCard;