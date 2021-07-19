import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
    <div className="sidebarDiv">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/about">About Me</Link>
        <Link className="links" to="/projects">Projects</Link>
        <Link className="links" to="/contact">Contact Me</Link>
        <Link className="links" to="/resume">Resume</Link>
    </div>
    )
}

export default Sidebar
