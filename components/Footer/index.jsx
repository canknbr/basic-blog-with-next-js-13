import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <Link
        href="https://github.com/canknbr"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by &nbsp;
         <span className={styles.title}>Can KANBUR</span>
      </Link>
    </footer>
  );
}

export default Footer;
