import React from 'react';
import styles from './listView.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <div>
        <h2>Quincena de la boda</h2>
        <span>$14,500.00</span>
      </div>
      <div>
        <p>Agosto/Quincena 2</p>
        <p>Año 2023</p>
      </div>
    </div>
  );
}

export default Card;
