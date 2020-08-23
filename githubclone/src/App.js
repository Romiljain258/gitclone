import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NavbarPerm from './components/NavbarPerm';
import AddQ from './Ques/AddQ';
import Qdisplay from './Ques/Qdisplay';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
       <Router>
         <NavbarPerm/>
         <Switch>   
            <Route path='/addQ' exact component={AddQ} />
            <Route path='/' exact component={Navbar} />
            <Route path='/Qdis' exact component={Qdisplay} />
         </Switch>
       </Router>
  );
}

export default App;
