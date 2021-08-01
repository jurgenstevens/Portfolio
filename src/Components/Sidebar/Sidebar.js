import React from 'react'
import "./Sidebar.css"
import About from '../About/About'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = ({projects}) => {
    const [sites] = useState(projects)


    return (
    <div className="sidebarDiv" >
        <img src={process.env.PUBLIC_URL + "/Images/eightbitjurgen.jpg"} 
            onClick={() => window.open('https://www.instagram.com/eightbitparty/', "_blank")} 
        />
        <Link className="links" id="mainLink" to="/" >Home</Link>
        <hr />
        <Link className="links" to="/about">About Me</Link>
        <hr />
        <Link className="links" to="/projects" sites={sites}>Projects</Link>
        <hr />
        <Link className="links" to="/contact">Contact Me</Link>
        <hr />
        <Link className="links" to="/resume">Resume</Link>
    
    </div>
    )
}

export default Sidebar
