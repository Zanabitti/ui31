import React from "react";
import './HButton.css';
import imgChevDown from './chev-down.png';

class HButton extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return (
            <button className={this.props.btnType}>
                <img src={imgChevDown} alt="Minimize" />
            </button>
        );
    }
}

export default HButton;