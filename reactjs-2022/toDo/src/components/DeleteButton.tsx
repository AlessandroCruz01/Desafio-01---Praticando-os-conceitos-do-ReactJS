import React from 'react';
import { TbTrash } from 'react-icons/tb';
import styles from './DeleteButton.module.css'

interface DeleteButtonProps {
  onClick: () => void
}

export function DeleteButton({onClick} : DeleteButtonProps){
  return (
    <button className={styles.Container} onClick={onClick}>
        <TbTrash size={22}/>
    </button>
  );
}
