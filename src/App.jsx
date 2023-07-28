import Header from './components/Header'
import Hero from './components/HEro'
import Marquee from "react-fast-marquee";

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
      <Marquee autoFill='true' className='marquee'
        style={{
          borderBottom: darkMode ? '0.5px solid #eee' : 'none',
          position: 'fixed',
        }}>
        <p>Small Acts, Big Impact ✹ Spread Joy, One Act at a Time ✹ Acts of kindness, endless smiles ✹ </p>
      </Marquee>
      <Header />
      <Hero />

      <Demo />
    </div>
  )
}

export default App