import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header className="header-component" />
      <div className="sidebarDiv">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">About Me</Link>
            <Link className="links" to="/projects">Projects</Link>
            <Link className="links" to="/contact">Contact Me</Link>
            <Link className="links" to="/resume">Resume</Link>
        </div>
      <Home className="main-component" />
    </div>
  );
}

export default App;
