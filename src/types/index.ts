export interface TodoItem {
  id: string
  text: string
  completed: boolean
}

export interface FilterItem {
  id: string
  name: FilterName
  isActive: boolean
}

export type FilterName = 'All' | 'Active' | 'Completed'
