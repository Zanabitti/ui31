import React, { Component} from "react";
import "./App.css";
import Window from './components/window/Window'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        VIEWPORTHEIGHT : window.innerHeight,
        VIEWPORTWIDTH : window.innerWidth
    }
  }

  render(){
    const appStyle = {
      height: this.state.VIEWPORTHEIGHT + 'px',
      width: '100%'
    };
    return(
      <div className="App" style={appStyle}>
        <Window />
      </div>
    );
  }
}

export default App;