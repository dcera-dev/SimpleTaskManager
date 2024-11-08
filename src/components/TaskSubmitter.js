import React, {useState} from "react";
import classes from "../css/TaskSubmitter.module.css"
import Button from "./Button";
import SubmitImg from '../assets/arrow.png';

const TaskSubmitter = (props) => {
    const [textData, setTextData] = useState('');
    const [error, setError] = useState('');

    const addTaskHandler = (e) => {
        e.preventDefault();
        setError('');
        if (textData === '') {
            setError('Blank submissions not accepted.');
            return;
        }
        props.onAddTask(textData);
        setTextData('');
    }
    
    return (
       <div className={classes.submitter}>
            <form onSubmit={addTaskHandler}>
                <input
                    className={classes.textInput}
                    type='text'
                    value={textData}
                    onChange={(e) => setTextData(e.target.value)}
                    placeholder='New ToDo List Item...'
                />
                <Button type='submit' img={SubmitImg} />
            </form>
            {error ? <div className={classes.errorDiv}><span>{error}</span></div> : <div className="errorDiv"><br /></div>}
       </div>
    );
};

export default TaskSubmitter;