import React from 'react';
import './App.scss';

import Help 		    from './components/Help'
import Metronome 		from './components/Metronome'

import {  BrowserRouter as Router, 
          Route,
          Link 
} from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <Route exact path="/" component={Metronome}/>
      <Route path="/help" component={Help}/>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/help"><span>Help</span></Link></li>
  		</ul>
    </Router>
  )
}

export default App;