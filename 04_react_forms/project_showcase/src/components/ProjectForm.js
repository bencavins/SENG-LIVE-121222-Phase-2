// Deliverable 1: Make the `ProjectForm` component a controlled component

// - Initialize state for all the form fields found in the component

// - Add an `onChange` event to each field that will update state associated 
// with the field that is interacted with

// - Provide a `value` attribute to each form field that will return the 
// associated piece of state

// - Add an `onSubmit` event handler to the form

import {useState} from 'react';

const ProjectForm = () => {
  // First approach (not recommended)
  // const [name, nameSetter] = useState('')
  // function handleNameChange(event) {
  //   nameSetter(event.target.value)
  // }

  // Second approach (recommended)
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    phase: '',
    link: '',
    image: '',
  })

  // Handles changes to form inputs
  function handleFormChange(event) {
    const {name, value} = event.target
    const newFormData = {...formData, [name]: value}
    // console.log(newFormData)
    setFormData(newFormData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submitted!')
  }

  return (
    <section>
      <form 
        className="form" 
        autoComplete="off"
        onSubmit={handleSubmit} >
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={formData.name}
          onChange={handleFormChange} />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about"
          value={formData.about}
          onChange={handleFormChange} />

        <label htmlFor="phase">Phase</label>
        <select 
          name="phase" 
          id="phase"
          value={formData.phase}
          onChange={handleFormChange} >
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
          value={formData.link}
          onChange={handleFormChange} />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image"
          value={formData.image}
          onChange={handleFormChange} />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
