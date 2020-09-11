import React, { Component } from "react";
import { Switch, Route} from 'react-router-dom'
import "./App.css";

//components 
import AddSmurf from '../components/AddSmurf'
import SmurfsList from '../components/SmurfsList'
import SmurfProfile from './SmurfProfile.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/smurf/:id'>
              <SmurfProfile />
          </Route>
          <Route path='/'>
              <AddSmurf />
              <SmurfsList />
          </Route>
        </Switch>
       
      </div>
    );
  }
}

export default App;
