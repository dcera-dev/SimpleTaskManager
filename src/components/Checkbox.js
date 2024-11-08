import React from 'react';
import classes from '../css/Checkbox.module.css';

const Checkbox = (props) => {
    return <button className={classes.checkButton} onClick={props.onClick}><img src={props.img}/></button>
}

export default Checkbox;