import '@/components/AppHeader/AppHeader.scss'
import IconMoon from '@/assets/icon-moon.svg'
import IconSun from '@/assets/icon-sun.svg'
import { useDarkMode } from 'usehooks-ts'
import { useEffect } from 'react'

function AppHeader() {
  const { isDarkMode, toggle } = useDarkMode({
    localStorageKey: 'darkMode',
  })

  useEffect(() => {
    document.body.dataset.theme = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return (
    <header className="app-header">
      <h1 className="app-header__title">Todo</h1>

      <button className="app-header__theme-toggle" onClick={toggle}>
        {isDarkMode ? (
          <img src={IconMoon} alt="" />
        ) : (
          <img src={IconSun} alt="" />
        )}
      </button>
    </header>
  )
}

export default AppHeader
