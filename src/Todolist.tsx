import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

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

    const mappedTask= props.tasks.map(t => {

            const removeTaskHandler = () => {
                props.removeTask(t.id)
            }


            return (
                <li key={t.id}>
                    <Button buttonName={"x"} callBack={removeTaskHandler}/>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                </li>)
        })

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const addTaskHandler = () => {
        props.addTask(title)
        setTitle("")
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskHandler()
        }
    }

    const changeFilterTsarHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onChange={onChangeHandler} value={title} onKeyDown={onKeyDownHandler}/>

            <Button buttonName={"+"} callBack={addTaskHandler}/>
        </div>
        <ul>
            {mappedTask}
        </ul>
        <div>
            <Button buttonName={"All"} callBack={() => changeFilterTsarHandler("all")}/>
            <Button buttonName={"Active"} callBack={() => changeFilterTsarHandler("active")}/>
            <Button buttonName={"Completed"} callBack={() => changeFilterTsarHandler("completed")}/>
        </div></div>
}
