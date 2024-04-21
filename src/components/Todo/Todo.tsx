import '@/components/Todo/Todo.scss'
import TodoFooter from '@/components/TodoFooter/TodoFooter.tsx'
import TodoListItem from '@/components/TodoListItem/TodoListItem.tsx'
import type { FilterItem, TodoItem } from '@/types'
import React, { Fragment } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { TodoFilter } from '@/components/TodoFilter/TodoFilter.tsx'

interface TodoProps {
  todos: TodoItem[]
  filters: FilterItem[]
  itemsLeft: number
  onCompletedTodo: (todo: TodoItem, completed: boolean) => void
  onDeleteTodo: (todo: TodoItem) => void
  onFilterTodo: (filter: FilterItem) => void
  onClearCompleted: () => void
}

const Todo: React.FC<TodoProps> = ({
  todos,
  filters,
  itemsLeft,
  onCompletedTodo,
  onDeleteTodo,
  onFilterTodo,
  onClearCompleted,
}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <div className="todo todo--margin">
      <div className="todo-container">
        <div className="todo-list">
          {todos.map((todo) => (
            <Fragment key={todo.id}>
              <TodoListItem
                todo={todo}
                onCompletedTodo={onCompletedTodo}
                onDeleteTodo={onDeleteTodo}
              />
              <div className="todo-divider" />
            </Fragment>
          ))}
        </div>
        <TodoFooter
          filters={filters}
          itemsLeft={itemsLeft}
          onFilterTodo={onFilterTodo}
          onClearCompleted={onClearCompleted}
        />
      </div>

      {isMobile && <TodoFilter filters={filters} onFilterTodo={onFilterTodo} />}
    </div>
  )
}

export default Todo
