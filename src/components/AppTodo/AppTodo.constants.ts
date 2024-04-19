import { generateId } from '@/utils/generateId.ts'
import { TodoItem } from '@/types'

export const initialTodos: TodoItem[] = [
  {
    id: generateId(),
    text: 'Complete online JavaScript course',
    completed: true,
  },
  {
    id: generateId(),
    text: 'Jog around the park 3x',
    completed: false,
  },
  {
    id: generateId(),
    text: '10 minutes meditation',
    completed: false,
  },
  {
    id: generateId(),
    text: 'Read for 1 hour',
    completed: false,
  },
  {
    id: generateId(),
    text: 'Pick up groceries',
    completed: false,
  },
  {
    id: generateId(),
    text: 'Complete Todo App on Frontend Mentor',
    completed: false,
  },
]
