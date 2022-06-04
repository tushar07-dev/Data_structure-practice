import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const Navbar = () => {
    const {isLight , toggleTheme } = useContext(ThemeContext);

  return (
    <div>Navbar :   :
        <button onClick={ toggleTheme }>
            {`Make ${isLight ? "Dark"  :  "Light"}`}
        </button>
    </div>
  );
};

export default Navbar;