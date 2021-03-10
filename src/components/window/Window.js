import React, { useState, useRef } from "react";
import Header from './header/Header';
import Toolbar from './toolbar/Toolbar';
import './Window.css';
import imgMainGroup from './PROGM001.png';

const Window = (props) => {

    //Reference for window->header->buttons
    const refWindow = useRef();
    const refGhost = useRef();
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(true);
    const [isMoving, setIsMoving] = useState(false);
    
    // Window dragging
    const drag = (e) => {
            e.preventDefault();
            e.stopPropagation();
            let prevXY;

            // Movement
            const onMove = (e) => {
                refGhost.current.style.display = 'block';

                if(!prevXY) {
                    prevXY = [e.clientX, e.clientY];
                }
                const [x, y] = prevXY;
                const [diffX, diffY] = [e.clientX - x, e.clientY - y];
                const currX = parseInt(refGhost.current.style.left) || 0; 
                const currY = parseInt(refGhost.current.style.top) || 0;

                refGhost.current.style.left = (currX + diffX) + 'px';
                refGhost.current.style.top = (currY + diffY) + 'px';

                prevXY = [e.clientX, e.clientY];
            }

            //On releasing mouse, remove listeners, move window to ghost
            const onDone = (e) => {
                refGhost.current.style.display = 'none';
                refWindow.current.style.top = refGhost.current.style.top;
                refWindow.current.style.left = refGhost.current.style.left;
                document.removeEventListener("mousemove", onMove);
                document.removeEventListener("mouseup", onDone); 
            }

            // If window has no "focus", set it        
            const setFocus = () => {
                    for (let i of document.getElementsByClassName('window-border')){
                        i.style.zIndex = 0;
                        i.getElementsByClassName('window-header')[0].classList.add('inactive');
                    }
                    refWindow.current.style.zIndex = 1;
                    refWindow.current.getElementsByClassName('window-header')[0].classList.remove('inactive');
            }
            //Add listener on mousedown to move or end
            if(refWindow.current.style.zIndex == 0) setFocus();

            //copy window size to ghost
            if(!isMaximized){
                refGhost.current.style.height = refWindow.current.style.height;
                refGhost.current.style.width = refWindow.current.style.width;
                refGhost.current.style.top = refWindow.current.style.top;
                refGhost.current.style.left = refWindow.current.style.left;
                document.addEventListener("mousemove", onMove);
                document.addEventListener("mouseup", onDone);
        }
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

    //Set 
    const maximize = (e) => {
        console.log('maxed');
        refWindow.current.style.height = '100%';
        refWindow.current.style.width = '100%';
        refWindow.current.style.top = '0px';
        refWindow.current.style.left = '0px';
        setIsMaximized(true);
    }

    const restoreSize = (e) => {
        console.log('resized');
        const maxW = refWindow.current.getBoundingClientRect().width;
        const maxH = refWindow.current.getBoundingClientRect().height;
        //if no prev size
            refWindow.current.style.width = Math.floor(maxW * 0.8) + 'px';
            refWindow.current.style.height = Math.floor(maxH * 0.8) + 'px';
        setIsMaximized(false);
    }

    const handlers = {
        'min' : minimize,
        'max' : maximize,
        'res' : restoreSize
    };
    return (
            
            <>
            {/* Minimized icon*/}
            <div className={ isMinimized ? "window-minimized" : "window-minimized hidden"} onClick={upsize}>
                <img className="window-minimized-icon" src={imgMainGroup} alt={'img-'+props.title} />
                <p className="window-minimized-title">{props.title}</p>
            </div>
            {/* Window move/resize ghost*/}
            <div className="window-ghost" ref={refGhost}></div>
            {/* Window component*/}
            <div className={isMinimized ? "window-border inactive hidden" : "window-border inactive"}  ref={refWindow}>
                <div className="window-inner">
                    <Header title={props.title} hndlWindow={handlers} hndlDrag={drag} windowIsMaximized={isMaximized} isInactive={props.isInactive}/>
                    { props.hasToolbar && <Toolbar />}
                    <div className="window-content">
                        {props.children}
                    </div>
                </div>
            </div>
            </>
    );
}

export default Window;