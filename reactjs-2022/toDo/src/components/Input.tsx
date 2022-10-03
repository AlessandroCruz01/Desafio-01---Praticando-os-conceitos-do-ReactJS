import React, { InvalidEvent } from 'react';
import styles from './Input.module.css'
import { ChangeEvent } from "react";


interface InputTaskProps {
  taskDescription: string
  setTaskDescription: (task: string) => void
}

export function Input({taskDescription, setTaskDescription} : InputTaskProps){

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    setTaskDescription(event.target.value)
  }
  
  return (
    <input 
      className={styles.Input} 
      type="text"  
      placeholder='Adicione uma nova tarefa'
      value={taskDescription}
      onChange={handleNewTaskChange}
      required
    />
  );
}

