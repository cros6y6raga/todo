import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {
    const title1='What to learn11111111'
    const title2='What to learn22222222'
    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true, newValue:true },
        { id: 2, title: "JS", isDone: true, newValue:true },
        { id: 3, title: "ReactJS", isDone: false, newValue:true },
        { id: 4, title: "ReactJS", isDone: false, newValue:true }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true, newValue:true },
        { id: 2, title: "I am Happy", isDone: false, newValue:true },
        { id: 3, title: "Yo", isDone: false, newValue:true }
    ]

    return (
        <div className="App">
            <Todolist title={title1} xz={100200} tasks={tasks1}/>
            <Todolist title={title2} tasks={tasks2}/>
            {/*<div>*/}
            {/*    <h3>What to learn</h3>*/}
            {/*    <div>*/}
            {/*        <input/>*/}
            {/*        <button>+</button>*/}
            {/*    </div>*/}
            {/*    <ul>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
            {/*        <li><input type="checkbox" checked={false}/> <span>React</span></li>*/}
            {/*    </ul>*/}
            {/*    <div>*/}
            {/*        <button>All</button>*/}
            {/*        <button>Active</button>*/}
            {/*        <button>Completed</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
