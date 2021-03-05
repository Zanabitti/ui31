import React, { useState, useRef } from "react";
import Header from './header/Header';
import Toolbar from './toolbar/Toolbar';
import './Window.css';

const Window = (props) => {

    const refWindow = useRef();
    const [isMinimized, setIsMinimized] = useState(false);

    

    const drag = (e) => {
        if(e.target.className === 'window-header' || e.target.className === 'window-header inactive') {
            e.preventDefault();
            e.stopPropagation();
            let prevXY;
            if(refWindow.current.style.zIndex == 0) {
                for (let i of document.getElementsByClassName('window-border')){
                    i.style.zIndex = 0;
                    i.getElementsByClassName('window-header')[0].classList.add('inactive');
                }
                refWindow.current.style.zIndex = 1;
                refWindow.current.getElementsByClassName('window-header')[0].classList.remove('inactive');
            }
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
            const onDone = (e) => {
                refWindow.current.removeEventListener("mousemove", onMove);
                refWindow.current.removeEventListener("mouseup", onDone);           
            }
            refWindow.current.addEventListener("mousemove", onMove);
            refWindow.current.addEventListener("mouseup", onDone);
        }
    }

    const minimize = () => {
        setIsMinimized(true);
        console.log('minima');
    }

        return (
            isMinimized ? null : <div className="window-border inactive"  onMouseDown={drag} ref={refWindow}>
                <div className="window-inner">
                    <Header title={props.title} hndlWindow={minimize}/>
                    { props.hasToolbar && <Toolbar />}
                    <div className="window-content">
                        {props.children}
                    </div>
                </div>
            </div>
        );
}

export default Window;