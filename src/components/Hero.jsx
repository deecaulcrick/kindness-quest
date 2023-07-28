import React from 'react'
import yellowStar from '../assets/yellow-star.svg'
import orangeStar from '../assets/orange-star.svg'
import { useTheme } from '../context/ThemeContext';

function Hero() {

  const { darkMode } = useTheme();

  return (
    <div className="hero">
      <h1 className='heroText'>Spread kindness effortlessly and make the world brighter with</h1>
      <h2 className='styledText'
      >KindnessQuest</h2>


    </div>
  )
}

export default Hero