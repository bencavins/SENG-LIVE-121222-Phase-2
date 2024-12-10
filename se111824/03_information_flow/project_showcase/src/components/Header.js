import { useState } from "react";

const Header = ({ isDarkMode, handleClick, projects }) => {

  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // Deliverable 2: Use Inverse Data flow to implement 
  // Light-Dark mode

  // - Refact isDarkMode state from the `Header` 
  // component to the `App` component.

  // - Create a callback function that updates 
  // `isDarkMode` and pass the callback function 
  // as a prop to the `Header` component

  // - Inside the `Header` component, invoke the 
  // callback function in place of updating the 
  // state

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Total Projects: {projects.length}
      </h1>
      <button onClick={handleClick}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
