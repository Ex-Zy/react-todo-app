import '@/components/Todo/Todo.scss'
import TodoListItem from '@/components/TodoListItem'
import TodoFooter from '@/components/TodoFooter'
import { TodoItem } from '@/types'
import React, { Fragment } from 'react'

interface TodoProps {
  todos: TodoItem[]
}

const Todo: React.FC<TodoProps> = ({ todos }) => {
  return (
    <div className="todo todo--margin">
      <div className="todo-list">
        {todos.map((todo) => (
          <Fragment key={todo.id}>
            <TodoListItem todo={todo} />
            <div className="todo-divider" />
          </Fragment>
        ))}
      </div>
      <TodoFooter />
    </div>
  )
}

export default Todo
