import React from 'react';
import { TodoTask } from '../Todolist';

interface Props {
    task: TodoTask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTasks = ({ task, completeTask }: Props) => {
    return (
        <div className='w-50 m-auto'>

            <h6 className='d-flex justify-content-between'>
                <span>{task.taskName} </span>
                <span>{task.day} </span>
                <span onClick={() => { completeTask(task.taskName) }} className='btn bg-success '>Done</span>
            </h6>

        </div>
    );
};

export default TodoTasks;