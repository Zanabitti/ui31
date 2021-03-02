import React from 'react';
import './Header.css';
import HButton from './hbutton/HButton';

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="window-header">
                <HButton btnType="button-dash"/>
                <div className="window-header-title">
                    <p className="window-header-title-text">{this.props.title}</p>
                </div>
                <HButton btnType="button-minimize"/>
                <HButton btnType="button-maximize"/>
            </div>
        );
    }
}

export default Header;