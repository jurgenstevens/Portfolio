import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation()
    console.log(location.state.contacts)
    const contacts = location.state.contacts.map((contact) =>
        {return <div className="contactCover">
                    <a className="contactImage" style={contact.style} target="_blank" rel="noreferrer" href={contact.link}>
                        <img src={contact.image} />
                        {/* <img className="contactCategory"/> */}
                    </a>
                    <h4 className="contactName">{contact.name}</h4>
                </div> 
        }
    )

    return (
        <div>
            <div className="contactsDiv">
                    {contacts}
            </div>

            <div classname="contactGreet">
                <p className="contactGreet">Shoot me an email, connect on LinkedIn or checkout my Github!</p>
            </div>
    
            <div className="contactInformation">
                <div className="contactInfo">
                    <img src="https://i.imgur.com/XKQHA8c.png" alt="envelope" />
                    <p>jurgen.stevens@yahoo.com</p>
                </div>
                <div className="contactInfo">
                    <img src="https://i.imgur.com/lkWUXDF.png" alt="phone-icon" />
                    <p>(847)8022801</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
