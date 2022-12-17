import * as React from 'react';
import * as styles from './section.module.css';

const Section = ({ additionalStyles, children }) => (
  <div className={`${styles.section} ${additionalStyles}`}>{children}</div>
);

export default Section;
