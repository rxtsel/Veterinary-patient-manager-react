import { useState, useEffect } from 'react'

const Theme = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
  }
  , [theme])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      window.localStorage.setItem('icon', 'bx-sun')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      window.localStorage.setItem('icon', 'bx-moon')
    }
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme) {
      document.documentElement.classList.toggle('light')
      setTheme(theme)
    }
  }
  , [])

  return (
    <>
      <i className={`bx ${theme === 'dark' ? 'bx-sun light' : 'bx-moon dark'} change-theme`} id='theme-button' onClick={toggleTheme} title={`${theme === 'dark' ? 'Light Mode' : 'Dark Mode'}`} />
    </>
  )
}

export default Theme
