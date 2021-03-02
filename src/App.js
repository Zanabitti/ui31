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
  windowResize(){
    this.setState({
      VIEWPORTHEIGHT : window.innerHeight,
      VIEWPORTWIDTH : window.innerWidth
    });
  }
  render(){
    const appStyle = {
      height: this.state.VIEWPORTHEIGHT +1+ 'px',
      width: this.state.VIEWPORTWIDTH +1+ 'px'
    };
    return(
      <div className="App" style={appStyle}>
        <Window hasToolbar="true" title="Program Manager"><Window title="Main"/></Window>
        
      </div>
    );
  }
}

export default App;