import { useState } from 'react';
import { TaskType } from '../../types/Task';
import * as C from './styles';

type TaskProps = {
    task: TaskType;
    onDelete: () => void
}

const Tasks = ({task, onDelete}:TaskProps) => {

    const [checked, setChecked] = useState(task.done);

    function handleChecked() {
        setChecked(!checked);
        onDelete()
    }

    return (
        <C.Container done={checked}>
            <input type="checkbox" checked={checked} onChange={handleChecked}/>
            <label>{task.name}</label>
        </C.Container>
    )
}

export default Tasks;