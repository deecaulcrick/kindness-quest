import React from 'react'
import yellowStar from '../assets/yellow-star.svg'
import orangeStar from '../assets/orange-star.svg'
import { useTheme } from '../context/ThemeContext';

function Hero() {

  const { darkMode } = useTheme();

  return (
    <div className="hero">
      <h1 className='heroText'>Spread kindness effortlessly and make the world brighter with <span className='styledText'
      >KindnessQuest</span></h1>

    </div>
  )
}

export default Hero