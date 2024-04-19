import '@/components/AddTodo/AddTodo.scss'
import React, { useState } from 'react'

interface AddTodoProps {
  onAddTodo: (text: string) => void
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
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
    <div className="add-todo">
      <input
        type="text"
        value={newTodo}
        placeholder="Search..."
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

export default AddTodo
