import { useState } from 'react'
import { FilterItem } from '@/types'

const initialFilters: FilterItem[] = [
  { id: '1', name: 'All', isActive: true },
  { id: '2', name: 'Active', isActive: false },
  { id: '3', name: 'Completed', isActive: false },
]

export const useFilterTodo = () => {
  const [filters, setFilters] = useState<FilterItem[]>(initialFilters)

  function setActiveFilter(item: FilterItem) {
    const newItems = filters.map((filterItem) => ({
      ...filterItem,
      isActive: filterItem.id === item.id,
    }))

    setFilters(newItems)
  }

  return {
    filters,
    setActiveFilter,
  }
}
