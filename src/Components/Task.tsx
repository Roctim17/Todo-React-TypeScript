import React, { ChangeEvent, useState } from 'react';
import { TodoTask } from '../Todolist';
import TodoTasks from './TodoTasks';

const Task = () => {
    const [task, setTask] = useState<string>('');
    const [day, setDay] = useState<number>(0);
    const [todo, setTodo] = useState<TodoTask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDay(Number(event.target.value))
        }
    };
    const addTask = (): void => {
        const newTask = { taskName: task, day: day };
        setTodo([...todo, newTask]);
        setTask('');
        setDay(0);
        console.log(newTask)
    };

    const completeTask = (taskNameToDelete: string): void => {

        setTodo(todo.filter((task) => {
            return task.taskName !== taskNameToDelete
        }))

    };

    return (
        <div>
            <h1>Add Task</h1>
            <div className="">
                <div className="m-1">
                    <input className='w-50 border border-warning rounded p-1' placeholder='Add New Task' type="text" name='task'
                        value={task}
                        onChange={handleChange}
                    />
                </div>
                <div className="m-1">
                    <input className='w-50 border border-warning rounded p-1' placeholder='days' type="number" name='day'
                        value={day}
                        onChange={handleChange}
                    />
                </div>
                <div className="m-1">
                    <input className='w-50 border border-success rounded bg-dark text-white p-1' type="button" value="Done"
                        onClick={addTask}
                    />
                </div>
            </div>
            <div className="">
                {
                    todo.map((task: TodoTask, key: number) => {
                        return <TodoTasks
                            key={key}
                            task={task}
                            completeTask={completeTask}
                        ></TodoTasks>
                    }

                    )
                }
            </div>

        </div>
    );
};

export default Task;