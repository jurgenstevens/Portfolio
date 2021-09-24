import Sidebar from '../src/Components/Sidebar/Sidebar'
import Footer from '../src/Components/Footer/Footer'
import projectData from './Data/project-data.json'
import languageData from './Data/language-data.json'
import frameworkData from './Data/frameworks-data.json'
import Main from './Components/Main/Main'
import { useState } from 'react'


function App() {
  const [projects] = useState(projectData)
  const [languages] = useState(languageData)
  const [frameworks] = useState(frameworkData)
  
  return (
    <div className="App">
      <Main 
        projects={projects}
        languages={languages}
        frameworks={frameworks}
      />
      <Sidebar 
        projects={projects}
        languages={languages}
        frameworks={frameworks}
      />
      <Footer />
    </div>
  );
}

export default App;
