import AddTodo from '@/components/AddTodo'
import Todo from '@/components/Todo'
import { useState } from 'react'
import { initialTodos } from '@/components/AppTodo/AppTodo.constants.ts'
import { TodoItem } from '@/types'

function AppTodo() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos)

  function handleAddTodo(todo: TodoItem) {
    setTodos([todo, ...todos])
  }

  function handleCompleteTodo(todo: TodoItem, completed: boolean) {
    const newTodos: TodoItem[] = todos.map((t) =>
      t.id === todo.id ? { ...t, completed } : t
    )
    setTodos(newTodos)
  }

  function handleDeleteTodo(todo: TodoItem) {
    const newTodos: TodoItem[] = todos.filter((t) => t.id !== todo.id)
    setTodos(newTodos)
  }

  return (
    <div className="app-todo">
      <AddTodo className="add-todo--margin" onAddTodo={handleAddTodo} />
      <Todo
        todos={todos}
        onCompletedTodo={handleCompleteTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  )
}

export default AppTodo
