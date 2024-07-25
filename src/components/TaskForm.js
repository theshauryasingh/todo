import React from 'react'

const TaskForm = () => {
  return (
    <header className='app_header'>
        <form>
            <input type='text' placeholder='Enter your Task'></input>
        </form>
        <button className='tag'>HTML</button>
        <button className='tag'>CSS</button>
        <button className='tag'>JS</button>
        <button className='tag'>REACT</button>

        <select>
            <option>To Do</option>
            <option>Doing</option>
            <option>Done</option>
        </select>
        <button className='submit'>+ Add Task</button>
    </header>
  )
}

export default TaskForm