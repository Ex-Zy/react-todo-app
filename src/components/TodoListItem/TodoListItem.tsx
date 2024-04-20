import '@/components/TodoListItem/TodoListItem.scss'
import { TodoItem } from '@/types'
import React from 'react'
import { UiCheckbox } from '@/components/UiCheckbox/UiCheckbox.tsx'

interface TodoListItemProps {
  todo: TodoItem
  onCompletedTodo: (todo: TodoItem, completed: boolean) => void
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onCompletedTodo,
}) => {
  return (
    <div
      className={`todo-item ${todo.completed ? 'todo-item--completed' : ''}`}
      onClick={() => {
        onCompletedTodo(todo, !todo.completed)
      }}
    >
      <UiCheckbox
        className="ui-checkbox--position"
        checked={todo.completed}
        onChange={() => {
          onCompletedTodo(todo, !todo.completed)
        }}
      />
      {todo.text}
    </div>
  )
}

export default TodoListItem
