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
            <ol>
                {tasks.map(task => <Task task={task} key={task.id}/>)}
            </ol>
        )
    }

    function Task({task}) {
        return (
            <>
                <li>{task.name}</li>
                <button onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </>
        )
    }

    function addTask(name) {
        const newId = tasks[tasks.length - 1].id + 1 // create new id for new task
        setTasks([...tasks, {id: newId, name}])
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id)) // filter out the task with the matching id
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
                ADD TASK
            </button>
            <TasksList/>
        </div>
    )
}
