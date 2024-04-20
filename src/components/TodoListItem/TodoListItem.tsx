import '@/components/TodoListItem/TodoListItem.scss'
import { TodoItem } from '@/types'
import React from 'react'

interface TodoListItemProps {
  todo: TodoItem
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return <div className="todo-item">{todo.text}</div>
}

export default TodoListItem
