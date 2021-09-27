import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation()
    console.log(location.state.contacts)
    return (
        <div>
            <h1>Hello from Contacts</h1>
        </div>
    )
}

export default Contact
