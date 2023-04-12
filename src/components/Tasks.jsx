import {useState} from "react";

export default function TasksList({tasks, handleEdit, handleDelete}) {
    return (
        <ul>
            {tasks.map(task =>
                <Task
                    key={task.id}
                    task={task}
                    handleEdit={handleEdit}
                    handleDelete={() => handleDelete(task.id)}
                />
            )}
        </ul>
    )
}

function Task({task, handleEdit, handleDelete}) {
    const [isEditing, setIsEditing] = useState(false)

    return (
        isEditing
            ?
            <div className={'task-item'}>
                <li><input
                    value={task.name}
                    onChange={e => handleEdit({...task, name: e.target.value})}
                /></li>

                <div>
                    <button onClick={e => setIsEditing(false)}>save</button>
                    <button onClick={handleDelete}>x</button>
                </div>
            </div>
            :
            <div className={'task-item'}>
                <li>{task.name}</li>
                <div>
                    <button onClick={() => setIsEditing(true)}>edit</button>
                    <button onClick={handleDelete}>x</button>
                </div>
            </div>

    )
}
