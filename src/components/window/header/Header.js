import React, {useEffect, useRef} from 'react';
import './Header.css';
import HButton from './hbutton/HButton';

const Header = (props) => {


    return (
        <div className={props.isInactive ? "window-header inactive" : "window-header"}>
            <HButton btnType="button-dash" parentRef={props.parentRef} />
            <div className="window-header-title" onMouseDown={props.hndlDrag} >
                <p className="window-header-title-text">{props.title}</p>
            </div>
            <HButton btnType="button-minimize" hndlWindow={props.hndlWindow['min']} />
            { props.windowIsMaximized ? 
                <HButton btnType="button-both" hndlWindow={props.hndlWindow['res']} parentRef={props.parentRef} />
               : <HButton btnType="button-maximize" hndlWindow={props.hndlWindow['max']} parentRef={props.parentRef} />
            }
        </div>
    );
}

export default Header;