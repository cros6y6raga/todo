import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
export type FilterButtonType = 'All' | 'Active' | 'Completed'
function App() {

    // let tasks1 = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false },
    // ]
    const [tasks1, setTasks1] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ])
    const removeTask = (taskID: number) => {
        setTasks1(tasks1.filter(el => el.id !== taskID))
    }
    const [drushlakValue, setDrushlakValue] = useState<FilterButtonType>('All')
    let drushlack = tasks1
    if (drushlakValue === 'Active') {
        drushlack = tasks1.filter(el => !el.isDone)
    }
    if (drushlakValue === 'Completed') {
        drushlack = tasks1.filter(el => el.isDone)
    }
    const changeFilter = (value: FilterButtonType) => {
        setDrushlakValue(value)
    }
    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={drushlack}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;