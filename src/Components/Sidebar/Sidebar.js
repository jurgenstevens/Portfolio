import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = ({projects, languages, frameworks}) => {

    return (
    <div className="sidebarDiv" >
        <img src={process.env.PUBLIC_URL + "/Images/eightbitjurgen.jpg"} 
            onClick={() => window.open('https://www.instagram.com/eightbitparty/', "_blank")} 
            alt="8-bit-jurgen"
        />
        <Link className="links" id="mainLink" to="/" >Home</Link>
        <hr />
        <Link className="links"
            to={{pathname: '/about',
            state: {languages, frameworks}
        }}
        >About Me</Link>
        <hr />
        <Link className="links" 
            to={{pathname: "/projects",
            state: {projects}
        }}
        >Projects</Link>
        <hr />
        <Link className="links" to="/contact">Contact Me</Link>
        <hr />
        <Link className="links" to="/resume">Resume</Link>
    
    </div>
    )
}

export default Sidebar
