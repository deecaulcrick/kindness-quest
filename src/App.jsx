import Header from './components/Header'
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'

import { useTheme } from './context/ThemeContext';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className="app"
      style={{
        backgroundColor: darkMode ? 'var(--blue)' : 'var(--dark)',
        color: darkMode ? '#000' : '#fff',
      }}>
      <Header />
      <Hero />
      <Demo />
    </div>
  )
}

export default App