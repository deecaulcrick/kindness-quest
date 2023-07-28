import React from 'react'
import lightMode from '../assets/lightMode.svg'
import darkmode from '../assets/darkMode.svg'
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="header">
      <h3 className='logo'>KINDNESSQUEST</h3>
      <img onClick={toggleDarkMode}
        src={darkMode ? darkmode : lightMode} />

    </div>
  )
}

export default Header