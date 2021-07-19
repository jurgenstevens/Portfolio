import React from 'react'
import "./Header.css"

const Header = () => {
    // Set up day time greet REF: https://stackoverflow.com/questions/13244939/javascript-to-output-text-based-on-users-current-time
    let today = new Date()
    let currentHour = today.getHours()
    let greet

    if (currentHour < 12) {
        greet = <h1>Good morning!</h1>
    } else if (currentHour < 18) {
        greet = <h1>Good afternoon!</h1>
    } else {
        greet = <h1>Good evening.</h1>
    }


    return (
        <div className="headerDiv">
            {greet}
        </div>
    )
}

export default Header
