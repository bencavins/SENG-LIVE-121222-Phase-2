const Header = ({ isDarkMode, handleClick }) => {

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
