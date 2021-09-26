import React from 'react'
import { useLocation } from 'react-router-dom'

const Projects = () => {
    // this will bring in the state from the Link in Main.js containing the props
    const location = useLocation()
    console.log(location.state.projects)
    const projectList = location.state.projects.map((project) => 
            {return <div className="card">
                        <a className="cardCover" target="_blank" rel="noreferrer" href={project.link}>
                            <h4 className="cardName">{project.name}</h4>
                            <h4 className="cardCategory">{project.category}</h4>
                        </a>
                        <h2 className="cardTitle"><span>{project.name}</span></h2>
                        <p className="cardAbout">{project.about}</p>
                    </div>
            })
    return (
        <div className="projectsDiv">
            {projectList}
        </div>
    )
}

export default Projects 