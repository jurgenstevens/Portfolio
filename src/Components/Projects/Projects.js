import React, { useState } from 'react'

const Projects = ({projects}) => {
    console.log(projects)
    const [project, setProject] = useState(null)
    return (
        <div>
            <h1>Hello from Projects!</h1>
            {project ? (
                <div>
                    <h1>{project.name}</h1>
                </div>
            ) : null}
        </div>
    )
}


export default Projects
