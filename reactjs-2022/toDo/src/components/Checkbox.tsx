import React, { useState } from 'react';
import styles from './Checkbox.module.css'

//Id que valida a idependecia dos elemetos
interface CheckboxProps{
  id: string
  check: boolean
  setCheck: (check:boolean) => void
  handleClickCheckTask: () => void
}

export function Checkbox({id, check, handleClickCheckTask}: CheckboxProps) {

  return (
    <div className={styles.container}>
        <div className={styles.check}>
            <input type="checkbox" id={id} checked={check} onChange={handleClickCheckTask} />
            <label htmlFor={id}></label>
        </div>
    </div>
  );
}
