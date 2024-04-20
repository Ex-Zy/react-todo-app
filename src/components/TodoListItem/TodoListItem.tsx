import '@/components/TodoListItem/TodoListItem.scss'
import { TodoItem } from '@/types'
import React from 'react'
import { UiCheckbox } from '@/components/UiCheckbox/UiCheckbox.tsx'
import IconCross from '@/assets/icon-cross.svg'

interface TodoListItemProps {
  todo: TodoItem
  onCompletedTodo: (todo: TodoItem, completed: boolean) => void
  onDeleteTodo: (todo: TodoItem) => void
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onCompletedTodo,
  onDeleteTodo,
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
        onChange={(checked) => {
          onCompletedTodo(todo, checked)
        }}
      />
      {todo.text}
      <button
        className="todo-item__delete"
        onClick={(e) => {
          e.stopPropagation()
          onDeleteTodo(todo)
        }}
      >
        <img src={IconCross} alt="" />
      </button>
    </div>
  )
}

export default TodoListItem
