import React from 'react';
import styles from './menu.module.css';
import Button from './Button';

function Menu() {
  return (
    <div className={styles.content}>
      <Button text="Nuevo registro" />
      <Button text="Actualizar registro" />
      <Button text="Eliminar registro" />
    </div>
  );
}

export default Menu;
