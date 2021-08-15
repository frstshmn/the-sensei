import React from 'react';
import '../css/modal.scss';

const Modal = (props) => {

    return(
        <div className={`modal ${props.active ? "" : "hidden"}`}>
            <div className="modal-inner">

                <div className="header">
                    <div className="hide" onClick={props.dismiss}>
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5.62132" y1="1.37868" x2="1.37868" y2="5.62132" stroke="black" stroke-linecap="round"/>
                            <line x1="5.62132" y1="5.62132" x2="1.37868" y2="1.37868" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </div>
                    {props.title}
                </div>

                <div className="body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;