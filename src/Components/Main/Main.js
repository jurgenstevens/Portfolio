import React  from 'react'
import Header from "../Header/Header"
import About from '../About/About'
import Projects from '../Projects/Projects'
import { Route, Switch } from "react-router-dom"
import "./Main.css"

const Main = () => {
    return (
        <div className="mainDiv">

            <Header />
            <Switch>
                <Route exact path="/about" 
                    component={About} />
                <Route exact path="/projects" 
                    component={Projects} 
                />
            </Switch>
        </div>
    )
}

export default Main
