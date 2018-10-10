import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} cancelWindow={props.cancelWindow} />
        <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
            opacity: props.show ? '1': '0'
        }}>
            <p>{props.children}</p>
        </div>
    </Aux>
);

export default Modal;