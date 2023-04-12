import {useState} from "react";

export default function TasksList({tasks, handleEdit, handleDelete}) {

    console.log('rendering')
    return (
        <ol>
            {tasks.map(task => <Task
                key={task.id}
                task={task}
                handleEdit={handleEdit}
                handleDelete={() => handleDelete(task.id)}
            />)}
        </ol>
    )
}

function Task({task, handleEdit, handleDelete}) {
    const [isEditing, setIsEditing] = useState(false)

    return (
        isEditing
            ?
            <>
                <li><input
                    value={task.name}
                    onChange={e => handleEdit({...task, name: e.target.value})}
                /></li>

                <button onClick={e => setIsEditing(false)}>Save</button>
                <button onClick={handleDelete}>Delete</button>
            </>
            :
            <>
                <li>{task.name}</li>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </>

    )
}
