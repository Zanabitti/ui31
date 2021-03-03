import React from 'react';
import './Header.css';
import HButton from './hbutton/HButton';

const Header = (props) => {

        return (
            <div className="window-header">
                <HButton btnType="button-dash" parentRef={props.parentRef} />
                <div className="window-header-title">
                    <p className="window-header-title-text">{props.title}</p>
                </div>
                <HButton btnType="button-minimize" hndlWindow={props.hndlWindow} />
                <HButton btnType="button-maximize" parentRef={props.parentRef} />
            </div>
        );
}

export default Header;