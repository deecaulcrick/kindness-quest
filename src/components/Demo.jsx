import { useState } from 'react'
import communityActs from '../data/communityActs'
import strangerActs from '../data/strangerActs'
import familyFriendsActs from '../data/familyFriendsActs'
import selfcareActs from '../data/selfcareActs'

import clipboardCopy from 'clipboard-copy'

import { useTheme } from '../context/ThemeContext';

function Demo() {
  //use darkMode
  const { darkMode } = useTheme();

  //handle copy to clipboard
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    clipboardCopy(`My random act of kindness today is to: ${randomAct}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);

      })
      .catch((error) => {
        console.error('Copy failed', error)
      })
  }

  //main app logic starts here 
  const categories = ['Self Care', 'Strangers', 'Family and Friends', 'Community']
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [randomAct, setRandomAct] = useState('')

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  };

  const handleClick = () => {
    let randomActArray = [];

    //Choose the appropriate array based on the selected category
    switch (selectedCategory) {
      case 'Self Care':
        randomActArray = selfcareActs;
        break;
      case 'Family and Friends':
        randomActArray = familyFriendsActs;
        break;
      case 'Strangers':
        randomActArray = strangerActs;
        break;
      case 'Community':
        randomActArray = communityActs;
        break;
      default:
        break;
    }

    //randomly pick an act from the selected category's array
    const randomIndex = Math.floor(Math.random() * randomActArray.length);
    const randomAct = randomActArray[randomIndex].act;

    setRandomAct(randomAct)
    console.log(randomAct);
  }

  return (
    <div className="demo">
      <div className='form'>
        <select id="categories" name="categories" value={selectedCategory} onChange={handleCategoryChange}
          style={{
            backgroundColor: darkMode ? '#fff' : 'var(--dark-blue)',
            color: darkMode ? '#000' : '#fff',
          }}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}

        </select> <br />
        <button className='button' onClick={handleClick}
        >Start your kindness quest</button>
      </div>
      {randomAct && (

        <div className="result-card"
          style={{
            backgroundColor: darkMode ? '#fff' : 'var(--dark-blue)',
          }}>
          <h3>Your random act of kindness is:</h3>
          <p
            style={{
              color: darkMode ? '#000' : '#fff',
            }}>{randomAct}</p>
          <button className='copy'
            onClick={handleCopyClick}>
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </button>


        </div>
      )
      }

    </div >
  )
}

export default Demo