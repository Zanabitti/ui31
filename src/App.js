import React, { Component} from "react";
import "./App.css";
import Window from './components/window/Window'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Window />
      </div>
    );
  }
}

export default App;