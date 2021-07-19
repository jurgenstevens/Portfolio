import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home"
import Sidebar from "./Components/Sidebar/Sidebar";
// import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* <div className="sidebarDiv">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">About Me</Link>
            <Link className="links" to="/projects">Projects</Link>
            <Link className="links" to="/contact">Contact Me</Link>
            <Link className="links" to="/resume">Resume</Link>
        </div> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
