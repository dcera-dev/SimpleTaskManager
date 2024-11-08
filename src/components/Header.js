import React from "react";
import classes from "../css/Header.module.css";

const Header = (props) => {
    var cssClass;
    var notDone = props.tasksNotDone;
    var done = props.tasksDone;

    if (notDone === '0') {
        cssClass = classes.zero;
    }
    else if (notDone > '0' && done === 0) {
        cssClass = classes.none;
    }
    else if (notDone > '0' && done < notDone) {
        cssClass = classes.some;
    }
    else cssClass = classes.all;

    return (
        <div className={classes.headerBacking}>
            <h1 className={cssClass}>{props.tasksDone}/{props.tasksNotDone} Completed.</h1>
        </div>
    )
}

export default Header;