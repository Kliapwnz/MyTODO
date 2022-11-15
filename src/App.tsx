import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

type FilterValueType="All" | "Active" | "Completed"


function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "Dota", isDone: true}
    ])

    let [filter, setFiler] = useState("All")

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    let afterFilterTasks = tasks
    if (filter === "Active") {
        afterFilterTasks = tasks.filter(el => !el.isDone)
    }
    if (filter === "Completed") {
        afterFilterTasks = tasks.filter(el => el.isDone)
    }

    const filteredTasks = (filterValue: string) => {
        setFiler(filterValue)

    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={afterFilterTasks}
                      removeTask={removeTask}
                      filteredTasks={filteredTasks}


            />
        </div>
    );
}

export default App;
