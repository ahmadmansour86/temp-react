import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Contact from './Components/Contact';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Main}/>
        <Route exact path="/Contact" component={Contact}/>
      </BrowserRouter>
  );
  }
}

export default App;
