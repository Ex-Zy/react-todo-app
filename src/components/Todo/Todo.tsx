import '@/components/Todo/Todo.scss'
import TodoListItem from '@/components/TodoListItem'
import TodoFooter from '@/components/TodoFooter'
import { FilterName, TodoItem } from '@/types'
import React, { Fragment } from 'react'

interface TodoProps {
  todos: TodoItem[]
  itemsLeft: number
  onCompletedTodo: (todo: TodoItem, completed: boolean) => void
  onDeleteTodo: (todo: TodoItem) => void
  onFilterTodo: (filterName: FilterName) => void
}

const Todo: React.FC<TodoProps> = ({
  todos,
  itemsLeft,
  onCompletedTodo,
  onDeleteTodo,
  onFilterTodo,
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
      <TodoFooter itemsLeft={itemsLeft} onFilterTodo={onFilterTodo} />
    </div>
  )
}

export default Todo
