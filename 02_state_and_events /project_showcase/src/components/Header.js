const Header = ({isDarkMode, setDarkMode}) => {
  
  function handleClick(event) {
    setDarkMode(prevValue => !prevValue)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;
