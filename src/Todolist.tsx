import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (valueTitle: string) => void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle("")
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onChange={onChangeHandler} value={title}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                props.changeFilter("all")
            }}>
                All
            </button>
            <button onClick={() => {
                props.changeFilter("active")
            }}>
                Active
            </button>
            <button onClick={() => {
                props.changeFilter("completed")
            }}>
                Completed
            </button>
        </div>
    </div>
}
