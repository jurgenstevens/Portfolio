import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation()
    // console.log(location.state.languages)
    console.log(location.state.frameworks)
    const languages = location.state.languages.map((language) => 
        {return <div className="aboutCover">
                    <div className="aboutText">
                        <h4 className="aboutTitle">{language.name}</h4>
                        <h4 className="aboutCategory">{language.category}</h4>
                    </div>
                    <h4 className="aboutName"><span>{language.name}</span></h4>
                </div>
        })
    const frameworks = location.state.frameworks.map((framework) => 
    {return <div className="aboutCover">
                <div className="aboutText" style={framework} >
                    <h4 className="aboutTitle">{framework.name}</h4>
                    <h4 className="aboutCategory">{framework.category}</h4>
                </div>
                <h4 className="aboutName"><span>{framework.name}</span></h4>
            </div>
    })
    return (
        <div className="aboutDiv">
            <div className="bio">
                <h3>I'm a fullstack web developer from Chicago, Illinois, USA and I love building things that bring people closer together. Besides being fluent in Spanish, and knowing some Italian and Bosnian, below are this skills I have to offer.</h3>
            </div>
                {languages}
                {frameworks}
        </div>
    )
}

export default About
