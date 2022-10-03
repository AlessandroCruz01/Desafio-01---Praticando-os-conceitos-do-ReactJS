import React from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import styles from './CreateButton.module.css'

export function CreateButton (){
  return (
    <button className={styles.Button} type='submit'>Criar <AiOutlinePlusCircle size={15} style={{marginLeft:'8px'}}/></button>
  );
}
