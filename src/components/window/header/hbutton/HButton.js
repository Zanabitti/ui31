import React from "react";
import './HButton.css';
import imgChevDown from './chev-down.png';
import imgChevUp from './chev-up.png';
import imgChevBoth from './chev-both.png';
import imgDash from './dash.png';


class HButton extends React.Component {
    constructor(props) {
        super(props);
        
    }
    clickHandler(e){
        const minimize = (e) => {
            console.log('minimized');
        }
    }

    render(){
        const imgSrc = this.props.btnType == 'button-minimize' ? imgChevDown :
                    this.props.btnType == 'button-maximize' ? imgChevUp :
                    this.props.btnType == 'button-dash' ? imgDash : null;
            
        return (
            <button className={this.props.btnType} onClick={this.clickHandler}>
                <img src={imgSrc} alt={this.props.btnType} />
            </button>
        );
    }
}

export default HButton;