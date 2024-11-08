import React from 'react';
import classes from '../css/Button.module.css';

const Button = (props) => {
    let image = props.img || null;
    return (
        <div className={classes.container}>
            {(image == null) ? 
            <button
                className={classes.Button}
                id={props.id}
                value={props.text}
                onClick={props.onClick}
                type={props.type || null}  
            >
                {props.text}
            </button>
            :
            <button
                className={classes.Button}
                id={props.id}
                onClick={props.onClick}
                type={props.type || null}
            >
                <img src={props.img} className={classes.image} />
                {props.text}
            </button>}
        </div>
    );
};

export default Button;