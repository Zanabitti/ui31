import React from 'react';
import './Toolbar.css';
import Toolmod from './toolmod/Toolmod';

class Toolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tools : ['file','options','window','help']
        }
    }
    render(){
        const modList = this.state.tools.map((tool) => {
            return <Toolmod key={tool} toolType={tool}/>
        });
        return(
            <div className="window-toolbar">
                {modList}
            </div>
        );
    }
}
export default Toolbar;