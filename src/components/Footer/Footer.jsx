import { Component } from 'react';
import styles from './Footer.module.css';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2026 Films. Все права защищены.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
