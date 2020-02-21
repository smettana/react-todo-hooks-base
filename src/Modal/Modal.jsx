import React, {Component, Fragment} from 'react';
import './Modal.css';

export default class Modal extends Component {
    state = {
       isOpen: false 
    }


    render(){
        const {isOpen} = this.state
        return (
            <Fragment>
                <button onClick={()=>{this.setState({isOpen:!isOpen})}}>Open modal</button>

                {isOpen && <div className="modal">
                    <div className="modal-body">
                        <h1>Modal title</h1>
                        <p>I am awesome modal! </p>
                        <button onClick={()=>{this.setState({isOpen:!isOpen})}}>Close modal</button>
                    </div>
                </div>}
            </Fragment>
        )
    }
}