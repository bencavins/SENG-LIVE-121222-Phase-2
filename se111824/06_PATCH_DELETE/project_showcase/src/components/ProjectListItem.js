// Deliverable 2: Click the delete button and make a 
// DELETE request

// - Attach an `onClick` event listener to the delete 
// button

// - Add a `DELETE` fetch request to the event handler 
// for the delete button

// - Update the `projects` state in the parent component
// `App` using the `.filter` function

  //  The goal is to return a new array with the deleted project excluded

// -----------------

  // Deliverable 3: Click the claps button and persist the updated number of claps

  // - Send a `PATCH` request when the `clapsCount` is updated through a click event
  
  // - Update the `projects` state in the parent component `App` using the `.map` function

import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({ project, enterProjectEditModeFor, setProjects }) => {
  const { id, image, about, name, link, phase, claps } = project;
  


  const [clapCount, setClapCount] = useState(claps === undefined ? 0 : claps);

  const handleClap = () => {
    
    // sending the update to the db
    fetch(`http://localhost:4000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "claps": clapCount + 1
      })
    })
    .then(resp => resp.json())
    .then(jsonData => {
      // map over all projects
      // update only the target project
      setProjects(existingProjects => existingProjects.map(project => {
        if (project.id === id) {
          project.claps = jsonData.claps  // update the target project clap count
        }
        return project
      }))
      // updating the clap count on the page
      setClapCount(prevCount => prevCount + 1)
    })
  };

  const handleEditClick = () => {
    enterProjectEditModeFor(id);
  };

  const handleDeleteClick = () => {

    // send a DELETE request to the db
    fetch(`http://localhost:4000/projects/${id}`, {
      method: 'DELETE'
    })
    .then(resp => {
      // check the response status code
      if (resp.ok) {
        // filter out the project with the matching id
        setProjects(existingProjects => existingProjects.filter(project => {
          if (project.id !== id) {
            return project
          }
          // if (project.id === id) {}
          // else {
          //   return project
          // }
        }))
      }
    })
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
