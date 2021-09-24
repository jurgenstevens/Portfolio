import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation()
    // console.log(location.state.languages)
    const languages = location.state.languages.map((language) => 
            {return <div className="card">
                        <img src={language.image} className="skillCover" alt="language-pic" />
                        <h2 className="skillName"><span>{language.name}</span></h2>
                    </div>
            }
        )

    return (
        <div className="aboutDiv">
            <h1>I'm a fullstack web developer from Chicago, Illinois, USA and I love building things that bring people closer together. Below are this skills I have to offer.</h1>
            <div className="skills">
                {languages}
            </div>
        </div>
    )
}

export default About
