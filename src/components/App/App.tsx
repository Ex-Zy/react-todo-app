import '@/components/App/App.css'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import SearchBar from '@/components/SearchBar'
import Todo from '@/components/Todo/Todo.tsx'

function App() {
  return (
    <>
      <AppHeader />
      <SearchBar />
      <Todo />
      <AppFooter />
    </>
  )
}

export default App
