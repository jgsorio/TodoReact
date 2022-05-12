import { useState, useEffect } from 'react';
import * as C from './App.styles';

import { TaskType } from './types/Task';
import Task from './components/Task';
import AddTask from './components/Addtask';

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    let tasksOnStorage = JSON.parse(localStorage.getItem("@tasks") || "");
    if (tasksOnStorage != "") {
      setTasks(tasksOnStorage);
    } 
  }, [])

  function handleAddTask(taskName: string) {
    const newTasks = [...tasks];
    newTasks.push({
      id: tasks.length + 1,
      name: taskName,
      done: false
    })

    setTasks(newTasks);
    localStorage.setItem("@tasks",JSON.stringify(newTasks))
  }

  function handleOnDelete(task:any) {
    setTimeout(() => {
      let tasksOnStorage = JSON.parse(localStorage.getItem("@tasks") || "");
      const newTasks = tasksOnStorage.filter((item:any) => {
          return item.id != task.id
      });
      localStorage.setItem("@tasks", JSON.stringify(newTasks));
      setTasks(newTasks)
  }, 1000);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        
        <AddTask onEnter={handleAddTask}/>

        { tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => handleOnDelete(task)}/>
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App;