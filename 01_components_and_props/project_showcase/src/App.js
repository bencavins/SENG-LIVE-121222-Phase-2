import Header from "./Header";
import ProjectList from "./ProjectList";


const projects = [
  {
    title: 'project 1',
    subtitle: 'sub1',
    img: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
  },
  {
    title: 'project 2',
    img: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
  },
  {
    title: 'project 3',
    img: ''
  }
]


function App() {
  return ( 
    <div>
      <Header title="Project Showcase!!!" subtitles="hello" />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App;