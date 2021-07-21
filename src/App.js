import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home"
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import projectData from './Data/project-data.json'
import { useState } from 'react'


function App() {
  const [projects, setProjects] = useState(projectData)
  return (
    <div className="App">
      <Sidebar projects={[projects]} />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
