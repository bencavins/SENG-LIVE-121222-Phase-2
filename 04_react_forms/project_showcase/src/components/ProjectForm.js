// Deliverable 1: Make the `ProjectForm` component a controlled component

// - Initialize state for all the form fields found in the component

// - Add an `onChange` event to each field that will update state associated 
// with the field that is interacted with

// - Provide a `value` attribute to each form field that will return the 
// associated piece of state

// - Add an `onSubmit` event handler to the form

import { useState } from 'react';

const ProjectForm = () => {
  
  // First Approach (Not Recommended)

    // const [name, nameSetter] = useState("");
    // const [about, aboutSetter] = useState("");

    // const handleName = (e) => {
    //   nameSetter(e.target.value);
    // }

    // const handleAbout = (e) => {
    //   aboutSetter(e.target.value);
    // }

  // Second Approach (Recommended)

    const [formData, setFormData] = useState({
      name: "",
      about: "",
      phase: "",
      link: "",
      image: ""
    });

    // Nice One Seb!
    const { name, about, phase, link, image } = formData;

    const handleOnChange = (e) => {
      // console.log(`Value: ${e.target.value}`);
      // console.log(`Name: ${e.target.name}`);

      // Object Destructuring Assignment
      const { name, value } = e.target;

      // console.log(name);
      // console.log(value);

      setFormData({...formData, [name]: value});
    }  
  
  return (
    <section>
      <form className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name}
          onChange={handleOnChange}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about" 
          value={about}
          onChange={handleOnChange}
        />

        <label htmlFor="phase">Phase</label>
        <select 
          name="phase" 
          id="phase"
          value={phase}
          onChange={handleOnChange}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link" 
          value={link}
          onChange={handleOnChange}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          value={image}
          onChange={handleOnChange}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
