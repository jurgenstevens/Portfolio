import React from 'react'
import "./Header.css"

const Header = () => {
    // Set up day time greet
    let today = new Date()
    let currentHour = today.getHours()
    // greet variable to be returned to the header with the following condition
    let greet = currentHour < 12 
        ? "Good morning!" 
        : currentHour < 18
            ? "Good afternoon!"
                : "Good evening."

    return (
        <div className="headerDiv">
            <h2 className="headerGreet">{greet} My name is Jurgen.</h2>
        </div>
    )
}

export default Header
