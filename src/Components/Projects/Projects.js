import React from 'react'
import { useLocation } from 'react-router-dom'
// import myImage from '../../../public/Images/hillbomber.png'


const Projects = () => {
    // this will bring in the state from the Link in Main.js containing the props
    const location = useLocation()
    console.log(location.state.projects)
    const projectList = location.state.projects.map((project) => 
        {return <div>
                    <article className="card">
                        <div className="imageCover">
                            <a className="projectText" href={project.link}>
                                {project.name}
                            </a>
                        </div>
                        <div>
                            <h2 className="projectName"><span>{project.name}</span></h2>
                            <p className="projectAbout">{project.about}</p>
                        </div>
                    </article>
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