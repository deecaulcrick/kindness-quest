import Sun from '../assets/sun.svg'
import Moon from '../assets/Moon.svg'
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="header">
      <h4 className='logo'>Kindness<i>Quest</i></h4>
      <img onClick={toggleDarkMode}
        src={darkMode ? Sun : Moon} />
    </div>
  )
}

export default Header