import '@/components/App/App.scss'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppTodo from '@/components/AppTodo'

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppTodo />
      <AppFooter />
    </div>
  )
}

export default App
