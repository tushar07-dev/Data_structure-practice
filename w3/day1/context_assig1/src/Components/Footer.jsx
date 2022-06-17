import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const Footer = () => {
    const {isLight , toggleTheme } = useContext(ThemeContext);

  return (
    <footer>
         <div>Navbar :   :
        <button onClick={ toggleTheme }>
            {`Make ${isLight ? "Dark"  :  "Light"}`}
        </button>
    </div>
    </footer>
  )
}

export default Footer