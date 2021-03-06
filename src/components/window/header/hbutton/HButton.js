import React from "react";
import './HButton.css';
import imgChevDown from './chev-down.png';
import imgChevUp from './chev-up.png';
import imgChevBoth from './chev-both.png';
import imgDash from './dash.png';


const HButton = (props) => {

    //Select image based on button type, received from header
    const imgSrc = props.btnType == 'button-minimize' ? imgChevDown :
                props.btnType == 'button-maximize' ? imgChevUp :
                props.btnType == 'button-dash' ? imgDash : 
                props.btnType == 'button-both' ? imgChevBoth : null;
            
        return (
            <button className={props.btnType} onClick={props.hndlWindow}>
                <img src={imgSrc} alt={props.btnType} />
            </button>
        );
    
}

export default HButton;