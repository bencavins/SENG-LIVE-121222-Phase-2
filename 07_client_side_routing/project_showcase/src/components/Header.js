// Deliverable 3: Add navigation to the application using the `Link` and 
// `NavLink` components

  // - Convert any html anchor tags to `Link` or `NavLink`

  // - Demonstrate the difference between `Link` and `NavLink`

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

  const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  
    return (
      <header>
        <nav>
          <h1 className="branding">
            <span className="logo">{"//"}</span>
            Project Showcase
          </h1>
          <div className="navigation">
            <NavLink className="button" to="/projects">
              All Projects
            </NavLink>
            <NavLink className="button" to="/project/new">
              Add Project
            </NavLink>
            <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  