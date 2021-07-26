import React from 'react'
import Header from "../Header/Header"
import About from '../About/About'
import Projects from '../Projects/Projects'
import { Route } from "react-router-dom"
import "./Main.css"

const Main = ({projects}) => {
    return (
        <div className="mainDiv">
            <Header />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
        </div>
    )
}

export default Main
