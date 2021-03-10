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
  componentDidMount(){
    window.onresize = this.windowResize.bind(this);
  }

  //Change "desktop" size to match the current browser window
  windowResize(){
    this.setState({
      VIEWPORTHEIGHT : window.innerHeight,
      VIEWPORTWIDTH : window.innerWidth
    });
  }
  render(){
    //Set "desktop" to entire browser window size
    const appStyle = {
      height: this.state.VIEWPORTHEIGHT +1+ 'px',
      width: this.state.VIEWPORTWIDTH +1+ 'px'
    };
    return(
      <div className="App" style={appStyle}>
        <Window hasToolbar="true" title="Program Manager" isInactive={true}><Window title="Main" isInactive={false}/></Window>
        
      </div>
    );
  }
}

export default App;