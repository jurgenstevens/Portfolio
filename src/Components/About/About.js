import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation()
    // console.log(location.state.languages)
    const languages = location.state.languages.map((language) => 
        {return <div className="aboutCard">
                    <img className="skillCover" src={language.image} alt="language-pic" />
                    <h2 className="skillName">{language.name}</h2>
                </div>
        })

    return (
        <div className="aboutDiv">
            <div className="bio">
            <h1>I'm a fullstack web developer from Chicago, Illinois, USA and I love building things that bring people closer together. Below are this skills I have to offer.</h1>
            </div>
            <div className="skills">
                {languages}
            </div>
        </div>
    )
}

export default About
