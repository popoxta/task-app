import React, {useState} from 'react'

export default function App() {
    const fakeTasks = [
        {id: 0, name: 'taskName'},
        {id: 1, name: 'taskName2'},
        {id: 3, name: 'taskName3'},
    ]

    function TasksList(){
        return(
            fakeTasks.map(task => <li key={task.id}>{task.name}</li>)
        )
    }

    return (
        <div>
            <h1>TASKS</h1>
            <TasksList />
        </div>
    )
}
