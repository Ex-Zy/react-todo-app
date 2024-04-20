import '@/components/AddTodo/AddTodo.scss'
import React, { useState } from 'react'

interface AddTodoProps {
  onAddTodo: (text: string) => void
  className?: string
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo, className }) => {
  const [newTodo, setNewTodo] = useState('')

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onAddTodo(newTodo)
      setNewTodo('')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value)
  }

  return (
    <div className={`add-todo ${className ?? ''}`}>
      <label className="add-todo__checkbox">
        <input type="checkbox" style={{ display: 'none' }} />
      </label>
      <input
        type="text"
        className="add-todo__input"
        value={newTodo}
        placeholder="Create a new todo…"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

export default AddTodo
