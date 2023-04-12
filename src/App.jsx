import React, {useState} from 'react'
import TasksList from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";

export default function App() {
    const initialTasks = [
        {id: 0, name: 'Welcome'},
        {id: 1, name: 'to'},
        {id: 3, name: 'Tasky!'},
    ]
    const [tasks, setTasks] = useState(initialTasks)

    function handleChangeTask(changedTask) { // if task id matches, replace task
        setTasks(tasks.map(task => task.id === changedTask.id ? changedTask : task))
    }

    function handleAddTask(name) { // create new id for new task
        const newId = tasks[tasks.length - 1].id + 1
        setTasks([...tasks, {id: newId, name}])
    }

    function handleDeleteTask(id) { // filter out the task with the matching id
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className={'tasks-box'}>
            <h1>TASKY</h1>
            <AddTask
                handleAddTask={handleAddTask}
            />
            <TasksList
                tasks={tasks}
                handleEdit={handleChangeTask}
                handleDelete={handleDeleteTask}
            />
        </div>
    )
}
