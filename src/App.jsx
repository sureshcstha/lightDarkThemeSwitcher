import { useState, useEffect } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'


function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', "light") // Removes any existing dark or light class from the <html> element 
    document.querySelector('html').classList.add(themeMode) // add the current themeMode
  }, [themeMode])

  return (
    // Pass themeMode, darkTheme, and lightTheme to the Provider so all child components can access them
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App