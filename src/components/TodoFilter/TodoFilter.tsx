import '@/components/TodoFilter/TodoFilter.scss'
import React from 'react'
import type { FilterItem } from '@/types'

interface TodoFilterProps {
  filters: FilterItem[]
  onFilterTodo: (filter: FilterItem) => void
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  filters,
  onFilterTodo,
}) => {
  return (
    <div className="todo-filter">
      {filters.map((item) => (
        <div
          key={item.id}
          className={`filter-item ${item.isActive ? 'filter-item--active' : ''}`}
          onClick={() => {
            onFilterTodo(item)
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}
