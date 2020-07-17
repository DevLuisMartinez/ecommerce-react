import React, { Component } from 'react';

export default class Toast extends Component{

    render(){

        const { message, color, show } = this.props;

        const style = {
            notifyCard : {
                'width': '300px',
                'position': 'fixed',
                'top': '80px',
                'right': '15px',
                'zIndex': '9999',
                'display': show ? 'block' : 'none',
                'background': color
            }
        };

        return(
            <div className="notify card" style={style.notifyCard}>
                <div className="card-body">
                    { message }
                </div>
            </div>
        )
    }
}