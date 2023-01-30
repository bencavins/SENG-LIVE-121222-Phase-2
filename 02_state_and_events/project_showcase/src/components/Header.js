const Header = ({isDarkMode, setDarkMode}) => {
  const modeText = isDarkMode ? 'Dark Mode' : 'Light Mode'

  function handleClick(event) {
    setDarkMode(prevValue => !prevValue)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{modeText}</button>
    </header>
  );
}

export default Header;
