import React, {useState} from 'react'

export default function App() {
    const initialTasks = [
        {id: 0, name: 'taskName'},
        {id: 1, name: 'taskName2'},
        {id: 3, name: 'taskName3'},
    ]
    const [tasks, setTasks] = useState(initialTasks)
    const [text, setText] = useState('')

    function TasksList() {
        return (
            tasks.map(task => <li key={task.id}>{task.name}</li>)
        )
    }

    function addTask(name) {
        console.log(tasks)
        const newId = tasks[tasks.length - 1].id + 1 // create new id for new task
        setTasks([...tasks, {id: newId, name}])
    }

    return (
        <div>
            <h1>TASKS</h1>

            <input type={'text'}
                   placeholder={'Add task...'}
                   onChange={e => setText(e.target.value)}/>

            <button type={'submit'}
                    onClick={e => {
                        e.preventDefault()
                        text ? addTask(text) : null
                    }}>
                ADD
            </button>

            <TasksList/>
        </div>
    )
}
