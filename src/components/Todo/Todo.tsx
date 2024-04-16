import '@/components/Todo/Todo.scss'
import TodoItem from '@/components/TodoItem'
import TodoFooter from '@/components/TodoFooter'

function Todo() {
  return (
    <div className="todo">
      <h2>Todo list</h2>
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <TodoFooter />
    </div>
  )
}

export default Todo
