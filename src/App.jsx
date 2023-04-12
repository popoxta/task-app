import React, {useState} from 'react'

export default function App() {
    const initialTasks = [
        {id: 0, name: 'taskName'},
        {id: 1, name: 'taskName2'},
        {id: 3, name: 'taskName3'},
    ]

    const [tasks, setTasks] = useState(initialTasks)

    function TasksList() {
        return (
            tasks.map(task => <li key={task.id}>{task.name}</li>)
        )
    }

    function addTask() {
        console.log(tasks)
        const newId = tasks[tasks.length - 1].id + 1 // create new id for new task
        setTasks([...tasks, {id: newId, name: `newTask`}])
    }

    return (
        <div>
            <h1>TASKS</h1>
            <button onClick={addTask}>ADD</button>
            <TasksList/>
        </div>
    )
}
