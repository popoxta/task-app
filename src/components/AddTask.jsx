import {useState} from "react";

export default function AddTask({handleAddTask}){
    const [text, setText] = useState('')

    function addTask(e){
        e.preventDefault()
        text ? handleAddTask(text) : alert('Please enter a title for your task')
        setText('')
    }

    return(
        <form>
            <input type={'text'}
                   placeholder={'Add task...'}
                   value={text}
                   onChange={e => setText(e.target.value)}
            />
            <button type={'submit'}
                    onClick={e => {
                        e.preventDefault()
                        addTask()
                    }}>
                ADD TASK
            </button>
        </form>

    )
}