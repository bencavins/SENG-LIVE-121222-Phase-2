import { useState } from "react";


const ProjectFormControlled = ({ setProjects }) => {
    // tracking the form data in state
    const [formData, setFormData] = useState({})

    function handleSubmit(event) {
      // prevent the page refresh from happening
      event.preventDefault()

      // can validate form data here

      // add the new project to the database
      fetch('http://localhost:4000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // send the formData to the db
      })
      .then(resp => resp.json())
      .then(jsonData => {
        // wait for a response from the db before updating state
        // db will give us ids
        setProjects(existingProjects => [...existingProjects, jsonData])
      })
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
            required
            onChange={e => setFormData({...formData, "name": e.target.value})}
            value={formData.name} />
  
          <label htmlFor="about">About</label>
          <textarea id="about" name="about"
            onChange={e => setFormData({...formData, "about": e.target.value})}
            value={formData.about} />
  
          <label htmlFor="phase">Phase</label>
          <select name="phase" id="phase"
            onChange={e => setFormData({...formData, "phase": parseInt(e.target.value)})}
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
            onChange={e => setFormData({...formData, "link": e.target.value})}
            value={formData.link} />
  
          <label htmlFor="image">Screenshot</label>
          <input type="text" id="image" name="image"
            onChange={e => setFormData({...formData, "image": e.target.value})}
            value={formData.image} />
  
          <button type="submit">Add Project</button>
        </form>
      </section>
    );
  };
  
  export default ProjectFormControlled;
  