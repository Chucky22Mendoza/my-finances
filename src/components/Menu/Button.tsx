import React from 'react';
import styles from './menu.module.css';

type Props = {
  text: string;
};

function Button({ text }: Props) {
  return (
    <button className={styles['btn-menu']} type="button">{text}</button>
  )
};

export default Button;
