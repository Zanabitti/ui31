import React from "react";
import Header from './header/Header';
import './Window.css';

class Window extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="window-border">
                <div className="window-inner">
                    <Header />
                </div>
            </div>
        );
    }
}

export default Window;