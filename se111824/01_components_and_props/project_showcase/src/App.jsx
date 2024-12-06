// Components in React are JS functions
// They need to return html (JSX)
// They can only return a single top level html element
//    You can nest any number of elements under the top level one


// import other components
import Header from "./Header"
import ProjectForm from "./ProjectForm"
import ProjectList from "./ProjectList"

import projects from "./projects" // import the projects array

export default function App() {
  console.log('in App component')

  // Header()  // this is what we logically want to do
  return (
    <div>
      <Header 
        title="Project Showcase" 
        subtitle="Subtitle" />  {/* this calls the Header component function */}
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  )
}

// export default App;