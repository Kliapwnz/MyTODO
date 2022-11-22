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
                    <button onClick={removeTaskHandler}>x
                    </button>
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

    const changeFilterHandlerAll = () => {
        props.changeFilter("all")
    }
    const changeFilterHandlerActive = () => {
        props.changeFilter("active")
    }
    const changeFilterHandlerCompleted = () => {
        props.changeFilter("completed")
    }

    const changeFilterTsarHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }
    //
    // const removeTaskHandler = (tId:string) => {
    //     props.removeTask(tId)
    // }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onChange={onChangeHandler} value={title} onKeyDown={onKeyDownHandler}/>
            {/*<button onClick={addTaskHandler}>+</button>*/}
            <Button buttonName={"+"} callBack={addTaskHandler}/>
        </div>
        <ul>
            {mappedTask}
        </ul>
        <div>
            <Button buttonName={"All"} callBack={() => changeFilterTsarHandler("all")}/>
            <Button buttonName={"Active"} callBack={() => changeFilterTsarHandler("active")}/>
            <Button buttonName={"Completed"} callBack={() => changeFilterTsarHandler("completed")}/>
            {/*<button onClick={() => changeFilterTsarHandler("all")}>All</button>*/}
            {/*<button onClick={() => changeFilterTsarHandler("active")}>Active</button>*/}
            {/*<button onClick={() => changeFilterTsarHandler("completed")}>Completed</button>*/}
        </div>
    </div>
}
