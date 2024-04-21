import '@/components/Todo/Todo.scss'
import TodoListItem from '@/components/TodoListItem'
import TodoFooter from '@/components/TodoFooter'
import type { FilterItem, TodoItem } from '@/types'
import React, { Fragment } from 'react'

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
  return (
    <div className="todo todo--margin">
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
  )
}

export default Todo
