import '@/components/TodoFilter/TodoFilter.scss'
import React from 'react'
import type { FilterItem } from '@/types'
import { useMediaQuery } from 'usehooks-ts'

interface TodoFilterProps {
  filters: FilterItem[]
  onFilterTodo: (filter: FilterItem) => void
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  filters,
  onFilterTodo,
}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <div className={`todo-filter ${isMobile ? 'todo-filter--mobile' : ''}`}>
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
