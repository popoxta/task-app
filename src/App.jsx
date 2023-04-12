import React, {useState} from 'react'
import TasksList from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";

export default function App() {
    const initialTasks = [
        {id: 0, name: 'taskName'},
        {id: 1, name: 'taskName2'},
        {id: 3, name: 'taskName3'},
    ]
    const [tasks, setTasks] = useState(initialTasks)

    function handleChangeTask(changedTask) {
        setTasks(tasks.map(task => task.i === changedTask ? changedTask : task))
    }

    function handleAddTask(name) {
        const newId = tasks[tasks.length - 1].id + 1 // create new id for new task
        setTasks([...tasks, {id: newId, name}])
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id)) // filter out the task with the matching id
    }

    return (
        <div>
            <h1>TASKS</h1>
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
