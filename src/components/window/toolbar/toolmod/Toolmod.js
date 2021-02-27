import React from 'react';
import './Toolmod.css';

class Toolmod extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        
        const modFirstLetter = this.props.toolType.substring(0,1)
        const modRest = this.props.toolType.substr(1);

        return (
            <div className="window-toolbar-toolmod">
                <p className="toolmod-title-first">{modFirstLetter}</p>
                <p className="toolmod-title">{modRest}</p>
            </div>
        );
    }
}

export default Toolmod;