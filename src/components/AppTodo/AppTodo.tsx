import AddTodo from '@/components/AddTodo'
import Todo from '@/components/Todo'
import { useState } from 'react'
import { initialTodos } from '@/components/AppTodo/AppTodo.constants.ts'
import { TodoItem } from '@/types'
import { generateId } from '@/utils/generateId.ts'

function AppTodo() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos)

  function handleAddTodo(text: string) {
    setTodos([
      {
        id: generateId(),
        completed: false,
        text,
      },
      ...todos,
    ])
  }
  return (
    <div className="app-todo">
      <AddTodo className="add-todo--margin" onAddTodo={handleAddTodo} />
      <Todo todos={todos} />
    </div>
  )
}

export default AppTodo
