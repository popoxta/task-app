
export default function TasksList({tasks, handleEdit, handleDelete}) {
    console.log('rendering tasks!')
    return (
        <ol>
            {tasks.map(task => <Task
                key={task.id}
                task={task}
                handleEdit={handleEdit}
                handleDelete={()=> handleDelete(task.id)}
                />)}
        </ol>
    )
}

function Task({task, handleEdit, handleDelete}) {
    return (
        <>
            <li>{task.name}</li>
            <button>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}
