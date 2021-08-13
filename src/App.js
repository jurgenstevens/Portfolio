import Sidebar from '../src/Components/Sidebar/Sidebar'
// import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer'
import projectData from './Data/project-data.json'
import Main from './Components/Main/Main'
import { useState } from 'react'


function App() {
  const [projects, setProjects] = useState(projectData)
  return (
    <div className="App">
      <Main projects={projects}/>
      <Sidebar projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
