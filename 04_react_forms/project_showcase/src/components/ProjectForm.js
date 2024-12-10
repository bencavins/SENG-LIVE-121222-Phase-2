// Deliverable 1: Make the `ProjectForm` component a controlled component

import { useState } from "react";

// - Initialize state for all the form fields found in the component

// - Add an `onChange` event to each field that will update state associated 
// with the field that is interacted with

// - Provide a `value` attribute to each form field that will return the 
// associated piece of state

// - Add an `onSubmit` event handler to the form

const ProjectForm = ({ setProjects }) => {
  const [formData, setFormData] = useState({})

  function handleSubmit(event) {
    event.preventDefault()
    // const newProject = {
    //   // "id": 1,
    //   "name": event.target.name.value,
    //   "about": event.target.about.value,
    //   "phase": parseInt(event.target.phase.value),
    //   "link": event.target.link.value,
    //   "image": event.target.image.value
    // }
    
    setProjects(projects => [...projects, formData])

    fetch('http://localhost:4000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(jsonData => console.log(jsonData))
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={(e) => setFormData({...formData, 'name': e.target.value})}
          value={formData.name} />

        <label htmlFor="about">About</label>
        <textarea id="about" name="about"
          onChange={(e) => setFormData({...formData, 'about': e.target.value})}
          value={formData.about} />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase"
          onChange={(e) => setFormData({...formData, 'phase': parseInt(e.target.value)})}
          value={formData.phase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link"
          onChange={(e) => setFormData({...formData, 'link': e.target.value})}
          value={formData.link} />

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image"
          onChange={(e) => setFormData({...formData, 'image': e.target.value})}
          value={formData.image} />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
