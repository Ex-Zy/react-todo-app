import '@/components/App/App.scss'
import AppHeader from '@/components/AppHeader/AppHeader.tsx'
import AppTodo from '@/components/AppTodo/AppTodo.tsx'
// import AppFooter from '@/components/AppFooter/AppFooter.tsx'

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppTodo />
      {/*<AppFooter />*/}
    </div>
  )
}

export default App
