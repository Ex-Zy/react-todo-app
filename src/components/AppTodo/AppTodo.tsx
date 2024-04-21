import AddTodo from '@/components/AddTodo'
import Todo from '@/components/Todo'
import { useMemo, useState } from 'react'
import { initialTodos } from '@/components/AppTodo/AppTodo.constants.ts'
import { FilterItem, FilterName, TodoItem } from '@/types'
import { useFilterTodo } from '@/hooks/useFilterTodo.ts'

function AppTodo() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos)
  const itemsLeft = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  )
  const { filters, setActiveFilter } = useFilterTodo()

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

  function handleFilterTodo(filter: FilterItem) {
    const variants: Record<FilterName, TodoItem[]> = {
      All: [...initialTodos],
      Active: initialTodos.filter((todo) => !todo.completed),
      Completed: initialTodos.filter((todo) => todo.completed),
    }

    setActiveFilter(filter)
    setTodos(variants[filter.name])
  }

  function handleClearCompleted() {
    setActiveFilter(filters[0])
    setTodos(initialTodos.map((todo) => ({ ...todo, completed: false })))
  }

  return (
    <div className="app-todo">
      <AddTodo className="add-todo--margin" onAddTodo={handleAddTodo} />
      <Todo
        todos={todos}
        filters={filters}
        itemsLeft={itemsLeft}
        onCompletedTodo={handleCompleteTodo}
        onDeleteTodo={handleDeleteTodo}
        onFilterTodo={handleFilterTodo}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  )
}

export default AppTodo
