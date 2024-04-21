import '@/components/TodoFilter/TodoFilter.scss'
import React, { useState } from 'react'
import { FilterItem, FilterName } from '@/types'

interface TodoFilterProps {
  onFilterTodo: (filterName: FilterName) => void
}

const initialItems: FilterItem[] = [
  { id: 1, name: 'All', isActive: true },
  { id: 2, name: 'Active', isActive: false },
  { id: 3, name: 'Completed', isActive: false },
]

export const TodoFilter: React.FC<TodoFilterProps> = ({ onFilterTodo }) => {
  const [items, setItems] = useState<FilterItem[]>(initialItems)

  function handleFilterClick(item: FilterItem) {
    const newItems = items.map((el) =>
      el.id === item.id ? { ...el, isActive: true } : { ...el, isActive: false }
    )

    setItems(newItems)
    onFilterTodo(item.name)
  }

  return (
    <div className="todo-filter">
      {items.map((item) => (
        <div
          key={item.id}
          className={`filter-item ${item.isActive ? 'filter-item--active' : ''}`}
          onClick={() => {
            handleFilterClick(item)
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}
