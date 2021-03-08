import React, { useState, useRef } from "react";
import Header from './header/Header';
import Toolbar from './toolbar/Toolbar';
import './Window.css';
import imgMainGroup from './PROGM001.png';

const Window = (props) => {

    //Reference for window->header->buttons
    const refWindow = useRef();
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(true);
    
    // Window dragging
    const drag = (e) => {
        // if(e.target.className === 'window-header' || e.target.className === 'window-header inactive') {
            console.log("ping");
            e.preventDefault();
            e.stopPropagation();
            let prevXY;

            // If window has no "focus", set it 
            if(refWindow.current.style.zIndex == 0) {
                for (let i of document.getElementsByClassName('window-border')){
                    i.style.zIndex = 0;
                    i.getElementsByClassName('window-header')[0].classList.add('inactive');
                }
                refWindow.current.style.zIndex = 1;
                refWindow.current.getElementsByClassName('window-header')[0].classList.remove('inactive');
            }

            // Movement
            const onMove = (e) => {
                

                if(!prevXY) {
                    prevXY = [e.clientX, e.clientY];
                }
                const [x, y] = prevXY;
                const [diffX, diffY] = [e.clientX - x, e.clientY - y];
                const currX = parseInt(refWindow.current.style.left) || 0;
                const currY = parseInt(refWindow.current.style.top) || 0;

                refWindow.current.style.left = (currX + diffX) + 'px';
                refWindow.current.style.top = (currY + diffY) + 'px';

                prevXY = [e.clientX, e.clientY];
            }

            //On releasing mouse, remove listeners
            const onDone = (e) => {
                refWindow.current.removeEventListener("mousemove", onMove);
                refWindow.current.removeEventListener("mouseup", onDone);           
            }

            //Add listener on mousedown to move or end
            refWindow.current.addEventListener("mousemove", onMove);
            refWindow.current.addEventListener("mouseup", onDone);
        // }
    }

    //Minimize the window
    //  Renders a different minimized-element when true
    const minimize = (e) => {
        setIsMinimized(true);
    }

    //Return to previous size and location
    //  Render original window component
    const upsize = (e) => {
        setIsMinimized(false);
    }

        return (
            isMinimized ? 
                //Minimized window
                <div className="window-minimized" onClick={upsize}>
                    <img className="window-minimized-icon" src={imgMainGroup} alt={'img-'+props.title} />
                    <p className="window-minimized-title">{props.title}</p>
                </div>
                : 
                //Window component
                <div className="window-border inactive"  ref={refWindow}>
                    <div className="window-inner">
                        <Header title={props.title} hndlWindow={minimize} hndlDrag={drag} windowIsMaximized={isMaximized}/>
                        { props.hasToolbar && <Toolbar />}
                        <div className="window-content">
                            {props.children}
                        </div>
                    </div>
                </div>
        );
}

export default Window;