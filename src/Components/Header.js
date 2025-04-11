import React from 'react'

    const Header = () => {
    const name = "bHaRgAV";
    const capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      };
    
      return (
        <div>
    
          <h1>Name:{name}</h1>
          <h1>Lowercase:{name.toLowerCase()}</h1>
          <h1>Uppercase:{name.toUpperCase()}</h1>
          <h1>Capitalize:{capitalize(name)}</h1>
        </div>
      );
    }
    
export default Header