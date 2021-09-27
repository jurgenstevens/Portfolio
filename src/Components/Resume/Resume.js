import React from 'react'

const Resume = () => {
    return (
        <div className="resumeDiv">
            <div className="resumeCard">
                <a href="./jurgenstevensresume.pdf" className="resumeImage" download>
                    <img src="https://i.imgur.com/U0QLLxB.png" alt="resume-card" />
                </a>
                <p className="resumeTitle"> Click to Download PDF</p>
            </div>
        </div>
    )
}

export default Resume
