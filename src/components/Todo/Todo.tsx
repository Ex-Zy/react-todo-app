import '@/components/Todo/Todo.scss'
import TodoListItem from '@/components/TodoListItem'
import TodoFooter from '@/components/TodoFooter'
import { TodoItem } from '@/types'
import React, { Fragment } from 'react'

interface TodoProps {
  todos: TodoItem[]
  onCompletedTodo: (todo: TodoItem, completed: boolean) => void
  onDeleteTodo: (todo: TodoItem) => void
}

const Todo: React.FC<TodoProps> = ({
  todos,
  onCompletedTodo,
  onDeleteTodo,
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
      <TodoFooter />
    </div>
  )
}

export default Todo
