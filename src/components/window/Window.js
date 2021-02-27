import React from "react";
import Header from './header/Header';
import Toolbar from './toolbar/Toolbar';
import './Window.css';

class Window extends React.Component {
    constructor(props){
        super(props);
        this.refWindow = React.createRef();
    }
    

    drag(e){
        if(e.target.className === 'window-header' || e.target.className === 'window-header inactive') {
            e.preventDefault();
            e.stopPropagation();
            let prevXY;
            if(this.refWindow.current.style.zIndex == 0) {
                for (let i of document.getElementsByClassName('window-border')){
                    i.style.zIndex = 0;
                    i.getElementsByClassName('window-header')[0].classList.add('inactive');
                }
                this.refWindow.current.style.zIndex = 1;
                this.refWindow.current.getElementsByClassName('window-header')[0].classList.remove('inactive');
            }
            const onMove = (e) => {
                

                if(!prevXY) {
                    prevXY = [e.clientX, e.clientY];
                }

                const [x, y] = prevXY;
                const [diffX, diffY] = [e.clientX - x, e.clientY - y];
                const currX = parseInt(this.refWindow.current.style.left) || 0;
                const currY = parseInt(this.refWindow.current.style.top) || 0;
    
                this.refWindow.current.style.left = (currX + diffX) + 'px';
                this.refWindow.current.style.top = (currY + diffY) + 'px';

                prevXY = [e.clientX, e.clientY];
            }
            const onDone = (e) => {
                this.refWindow.current.removeEventListener("mousemove", onMove);
                this.refWindow.current.removeEventListener("mouseup", onDone);           
            }
            this.refWindow.current.addEventListener("mousemove", onMove);
            this.refWindow.current.addEventListener("mouseup", onDone);
        }
    }

    dragStart(e){
        this.msStartX = e.clientX;
        this.msStartY = e.clientY;
    }

    render() {
        return (
            <div className="window-border inactive"  onMouseDown={this.drag.bind(this)} ref={this.refWindow}>
                <div className="window-inner">
                    <Header />
                    <Toolbar />
                </div>
            </div>
        );
    }
}

export default Window;