import React, { useState } from 'react'

const Project = ({props}) => {
    console.log(props)
    const [project, setProject] = useState(null)
    return (
        <div className="projectDiv">
            <h1>Hello from Projects!</h1>
            {project ? (
                <div>
                    <h1>{project.name}</h1>
                </div>
            ) : null}
        </div>
    )
}


export default Project
