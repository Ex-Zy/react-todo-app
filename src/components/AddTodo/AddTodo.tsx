import '@/components/AddTodo/AddTodo.scss'
import React, { useState } from 'react'
import { UiCheckbox } from '@/components/UiCheckbox/UiCheckbox.tsx'
import { TodoItem } from '@/types'
import { generateId } from '@/utils/generateId.ts'

interface AddTodoProps {
  onAddTodo: (todo: TodoItem) => void
  className?: string
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo, className }) => {
  const [newTodo, setNewTodo] = useState<TodoItem>({
    id: generateId(),
    completed: false,
    text: '',
  })

  function handleCompleteTodo() {
    setNewTodo({
      ...newTodo,
      completed: !newTodo.completed,
    })
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onAddTodo(newTodo)
      setNewTodo({
        id: generateId(),
        completed: false,
        text: '',
      })
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo({
      ...newTodo,
      text: e.target.value,
    })
  }

  return (
    <div className={`add-todo ${className ?? ''}`}>
      <UiCheckbox
        checked={newTodo.completed}
        onChange={handleCompleteTodo}
        className="ui-checkbox--position"
      />
      <input
        type="text"
        className="add-todo__input"
        value={newTodo.text}
        placeholder="Create a new todo…"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

export default AddTodo
