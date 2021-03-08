import React, {useEffect, useRef} from 'react';
import './Header.css';
import HButton from './hbutton/HButton';

const Header = (props) => {


    return (
        <div className="window-header">
            <HButton btnType="button-dash" parentRef={props.parentRef} />
            <div className="window-header-title" onMouseDown={props.hndlDrag} >
                <p className="window-header-title-text">{props.title}</p>
            </div>
            <HButton btnType="button-minimize" hndlWindow={props.hndlWindow} />
            <HButton btnType={props.windowIsMaximized ? "button-both" : "button-maximize"} parentRef={props.parentRef} />
        </div>
    );
}

export default Header;