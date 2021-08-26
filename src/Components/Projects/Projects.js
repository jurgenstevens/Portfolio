import React from 'react'
import { useLocation } from 'react-router-dom'
// import myImage from '../../../public/Images/hillbomber.png'


const Projects = () => {
    // this will bring in the state from the Link in Main.js containing the props
    const location = useLocation()
    console.log(location.state.projects)
    const projectList = location.state.projects.map((project) => 
        {return <div className="projectLink">
                    <a href={project.link}>
                        <img src={project.image} alt="project" />
                    </a><br />
                    <h1><span>{project.name}</span></h1>
                 </div>
        }
        )
    return (
        <div className="projectDiv">
            {projectList}
        </div>
    )
}


export default Projects 