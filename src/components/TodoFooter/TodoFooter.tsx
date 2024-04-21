import '@/components/TodoFooter/TodoFooter.scss'
import React from 'react'
import { TodoFilter } from '@/components/TodoFilter/TodoFilter.tsx'

interface TodoFooterProps {
  itemsLeft: number
  onFilterTodo: (filterName: 'All' | 'Active' | 'Completed') => void
}

const TodoFooter: React.FC<TodoFooterProps> = ({ itemsLeft, onFilterTodo }) => {
  return (
    <div className="todo-footer">
      <div className="items-left">{itemsLeft} items left</div>
      <TodoFilter onFilterTodo={onFilterTodo} />
      <div className="clear-completed">Clear completed</div>
    </div>
  )
}

export default TodoFooter
