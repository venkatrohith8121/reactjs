import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
        <Router>
                <Navbar/>
                <Switch>
                <Route path="/index" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
                </Switch>
        </Router>
    </div>
  )
}

export default App