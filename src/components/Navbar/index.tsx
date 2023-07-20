import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <div>
          <h1>Mis finanzas</h1>
        </div>
        <div>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
