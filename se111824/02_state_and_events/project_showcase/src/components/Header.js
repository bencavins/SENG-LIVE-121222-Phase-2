import { useState } from "react"

// How to use state:
// 1. initialize state in component with useState()
// 2. use the state variable when reading data from state
// 3. use the state setter function to update the state variable 

const Header = () => {
  // [stateVar, stateSetterFunc]
  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleClick() {
    // if (isDarkMode) {
    //   // isDarkMode = false
    //   setIsDarkMode(false)
    // } else {
    //   // isDarkMode = true
    //   setIsDarkMode(true)
    // }
    setIsDarkMode(!isDarkMode) // flip the value of isDarkMode
    console.log(isDarkMode)
  }

  // let buttonText = ''
  // if (isDarkMode === true) {
  //   buttonText = 'Light Mode'
  // } else {
  //   buttonText = 'Dark Mode'
  // }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      {/* <button onClick={handleClick} >
        {buttonText}
      </button> */}
      <button onClick={handleClick} >
        {isDarkMode === true ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
