import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation()
    // console.log(location.state.languages)
    const languages = location.state.languages.map((language) => 
        {return <div className="aboutCard">
                    <a className="cardCover" target="_blank" rel="noreferrer" href={language.link}>
                        <h4 className="cardName">{language.name}</h4>
                        <h4 className="cardCategory">{language.category}</h4>
                    </a>
                    <h2 className="cardTitle"><span>{language.name}</span></h2>
                </div>
        })

    return (
        <div className="aboutDiv">
            {/* <div className="bio">
                <h1>I'm a fullstack web developer from Chicago, Illinois, USA and I love building things that bring people closer together. Below are this skills I have to offer.</h1>
            </div> */}
                {languages}
        </div>
    )
}

export default About
