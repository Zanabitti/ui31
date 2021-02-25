import React from 'react';
import './Header.css';
import HButton from './hbutton/HButton';

class Header extends React.Component {
    render(){
        return (
            <div className="window-header">
                <HButton btnType="button-dash"/>
                <div className="window-header-title">
                    <p className="window-header-title-text">Testings</p>
                </div>
                <HButton btnType="button-minimize"/>
                <HButton btnType="button-maximize"/>
            </div>
        );
    }
}

export default Header;