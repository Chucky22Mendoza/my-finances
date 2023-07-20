import React from 'react';
import Card from './Card';
import styles from './listView.module.css';

function ListView() {
  return (
    <div className={styles['content-wrapper']}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ListView;
