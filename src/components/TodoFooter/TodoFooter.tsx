import '@/components/TodoFooter/TodoFooter.scss'
import React from 'react'

interface TodoFooterProps {
  itemsLeft: number
}

const TodoFooter: React.FC<TodoFooterProps> = ({ itemsLeft }) => {
  return (
    <div className="todo-footer">
      <div className="items-left">{itemsLeft} items left</div>
      <div className="filter-by">
        <div className="filter-by__item filter-by__item--active">All</div>
        <div className="filter-by__item">Active</div>
        <div className="filter-by__item">Completed</div>
      </div>
      <div className="clear-completed">Clear completed</div>
    </div>
  )
}

export default TodoFooter
