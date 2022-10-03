import React, { useState } from 'react';
import Empty from '../assets/Empty.svg'
import { CreateButton } from '../components/CreateButton';
import { Input } from '../components/Input';
import { Task } from '../components/Task';
import styles from './Tasks.module.css'
import { v4 as uuidv4 } from 'uuid';

export function Tasks(){
  
  const [taskList, setTaskList] = useState<string[]>([])
  const [task, setTask] = useState('')
  const [totalTaskshecked, setTotalTasksChecked] = useState(0)

  function handleNewTask(){
    event?.preventDefault()
    setTaskList([...taskList, task])
    setTask('')
  }

  function deleteComment(taskToDelete: string){
		//Imutabilidade
		const taskWithoutDeleteOne = taskList.filter(task => {
			return task !== taskToDelete
		})
		
		setTaskList(taskWithoutDeleteOne);

	}

  return (
    <article className={styles.Article}>
      <form className={styles.InputDiv} onSubmit={handleNewTask}>
        <Input taskDescription={task} setTaskDescription={setTask}/>
        <CreateButton/>
      </form>
      <div>
        <div className={styles.Container}>
          <header>
            <div className={styles.Status}>
              <strong>
                Tarefas criadas 
                <span>{taskList.length}</span>
              </strong>
              <strong>Concluidas 
                <span>{`${totalTaskshecked} de ${taskList.length}`}</span>
              </strong>
            </div>
          </header>
          <div className={styles.ListTasks}>
            {taskList.length === 0 
              ? <img src={Empty} alt="imagem com legenda de falta de tarefas" /> 
              : taskList.map((task) => (
                <Task 
                  key={uuidv4()} 
                  task={task} 
                  onDeleteComment={deleteComment} 
                />
              ))}

          </div>
        </div>
      </div>
    </article>
  );
}
