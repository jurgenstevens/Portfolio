import React from 'react'
import "./Header.css"

const Header = () => {
    // Set up day time greet
    let today = new Date()
    let currentHour = today.getHours()
    let greet

    if (currentHour < 12) {
        greet = "Good morning!"
    } else if (currentHour < 18) {
        greet = "Good afternoon!"
    } else {
        greet = "Good evening."
    }

    return (
        <div className="headerDiv">
            <h2>{greet} My name is Jurgen.</h2>
        </div>
    )
}

export default Header
