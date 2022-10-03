import React, { useEffect, useState } from 'react';
import { Checkbox } from './Checkbox';
import { DeleteButton } from './DeleteButton';
import { v4 as uuidv4 } from 'uuid';
import styles from './Task.module.css'


interface TaskProps {
  task: string
	onDeleteComment: (task:string) => void;
}

export function Task({task, onDeleteComment} : TaskProps) {
  
  const [check, setCheck] = useState(Boolean)
  
  function handleClickCheckTask(){
    setCheck(!check)
  }
  return (

    <div className={!check ? styles.Container : styles.ContainerCheck}>
        <Checkbox id={uuidv4()} check={check} setCheck={setCheck} handleClickCheckTask={handleClickCheckTask}/>
        <p>{task}</p>
        <DeleteButton onClick={() => onDeleteComment(task)}/>
    </div>
  );
}

