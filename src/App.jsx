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
        backgroundColor: darkMode ? '#222' : '#FDF2EC',
        color: darkMode ? '#fff' : '#222',
      }}>
      <Header />
      <Hero />
      <Demo />
    </div>
  )
}

export default App