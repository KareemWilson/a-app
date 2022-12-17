import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './section.module.css';

const Section = ({ additionalStyles, children }) => (
  <div className={`${styles.section} ${additionalStyles}`}>{children}</div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  additionalStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Section;
