import React from 'react'
import { useSelector } from 'react-redux'

import '../index.css'

const Counter = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const tasksDone = tasks.filter(task => task.isComplete).length

  return (
    <>
      <p className="counter-text">{tasksDone}/{tasks.length} tasks is done</p>
    </>
  )
}

export default Counter