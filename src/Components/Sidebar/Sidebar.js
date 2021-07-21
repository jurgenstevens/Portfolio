import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = ({projects}) => {
    const [sites, setSites] = useState(projects)
    return (
    <div className="sidebarDiv">
        <Link className="links" id="homeLink" to="/">Home</Link>
        <hr />
        <Link className="links" to="/about">About Me</Link>
        <hr />
        <Link className="links" to="/projects">Projects</Link>
        <hr />
        <Link className="links" to="/contact">Contact Me</Link>
        <hr />
        <Link className="links" to="/resume">Resume</Link>
    </div>
    )
}

export default Sidebar
