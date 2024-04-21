import '@/components/TodoFooter/TodoFooter.scss'
import React from 'react'
import { TodoFilter } from '@/components/TodoFilter/TodoFilter.tsx'
import type { FilterItem } from '@/types'

interface TodoFooterProps {
  filters: FilterItem[]
  itemsLeft: number
  onFilterTodo: (filter: FilterItem) => void
  onClearCompleted: () => void
}

const TodoFooter: React.FC<TodoFooterProps> = ({
  filters,
  itemsLeft,
  onFilterTodo,
  onClearCompleted,
}) => {
  return (
    <div className="todo-footer">
      <div className="items-left">{itemsLeft} items left</div>
      <TodoFilter filters={filters} onFilterTodo={onFilterTodo} />
      <div className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </div>
    </div>
  )
}

export default TodoFooter
