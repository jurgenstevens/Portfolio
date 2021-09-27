import React  from 'react'
import Home from "../Home/Home"
import Header from "../Header/Header"
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Resume from '../Resume/Resume'
import { Route, Switch } from "react-router-dom"
import "./Main.css"

const Main = () => {
    return (
        <div className="mainDiv">

            <Header />
            <Switch>
                <Route exact path="/"
                    component={Home}
                />
                <Route exact path="/about" 
                    component={About} />
                <Route exact path="/projects" 
                    component={Projects} 
                />
                <Route exact path="/contact" 
                    component={Contact} 
                />
                <Route exact path="/resume" 
                    component={Resume} 
                />
            </Switch>
        </div>
    )
}

export default Main
