import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type AddTaskProps = {
    onEnter: (task:string) => void;
}

const AddTask = ({onEnter}: AddTaskProps) => {
    const [taskName, setTaskName] = useState('');

    function handleKeyUp(e:KeyboardEvent) {
        if (e.code == 'Enter' && taskName != '') {
            onEnter(taskName);
            setTaskName('');
        }
    }
   
    return (
        <C.Container>
            <span>+</span>
            <input name='taskName' 
                placeholder='Digite uma tarefa'
                required value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                onKeyUp={handleKeyUp}/>
        </C.Container>
    )
}

export default AddTask;