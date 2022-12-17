import * as React from 'react';
import * as styles from './footer.module.css';

const Footer = () => (
  <footer>
    <div>
      <p>What are you waiting for?</p>
      <h4>Join +150 companies that already trust us for their growth</h4>
      <div className={styles.footerBtns}>
        <button type="button">Request a Demo</button>
        <button type="button">Contact Us</button>
      </div>
    </div>
  </footer>
);

export default Footer;
