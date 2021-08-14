import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Projects = () => {
    // this will bring in the state from the Link in Main.js containing the props
    const location = useLocation()
    console.log(location.state.projects)
    const projectList = location.state.projects.map(
        (project, i) => {return <h1>{project.name}</h1>}
        )
    return (
        <div className="projectDiv">
            {projectList}
        </div>
    )
}


export default Projects