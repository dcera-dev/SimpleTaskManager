import React, { useState } from 'react';
import Button from './Button';
import classes from '../css/TaskListItems.module.css';
import Checkbox from './Checkbox';

import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import Confirm from '../assets/confirm.png';
import Cancel from '../assets/cancel.png';
import Checked  from '../assets/tick.png';
import Unchecked from '../assets/unchecked.png';

const ListItem = (props) => {
    const [isEditable, setIsEditable] = useState(false);
    const [textData, setTextData] = useState(props.text);
    const [editText, setEditText] = useState(textData);
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');

    const handleEdit = (e) => {
        e.preventDefault();
        if (editText === '') {
            setError('Cannot submit nothing; use the \'Delete\' button to delete tasks.');
            return;
        }
        setError('');
        setTextData(editText);
        setIsEditable(false);
    }

    const handleCheck = () => {
        setIsChecked(true);
        props.onCheck(true);
    }

    const handleUncheck = () => {
        setIsChecked(false);
        props.onCheck(false);
    }

    const handleDelete = () => {
        if (isChecked) {
            props.onCheck(false);
        }
        props.onDelete(props.id);
    }

    return (
        <div className={classes.listContainer}>
            {!isEditable && (
                <li className={classes.listItem} id={props.id}>
                    {!isChecked && ( 
                        <div className={classes.textDiv}>
                            <Checkbox img={Unchecked} onClick={handleCheck}/>
                            <span>{textData}</span>
                        </div> )}
                    {isChecked && ( 
                        <div className={classes.textDiv}>
                            <Checkbox img={Checked} onClick={handleUncheck}/>
                            <span><del>{textData}</del></span>
                        </div> )}
                    <div className={classes.actionButtons}>
                        <Button onClick={() => setIsEditable(current => !current)} img={Edit} />
                        <Button id={props.id + '-delete'} onClick={handleDelete} img={Delete} />
                    </div>
                </li>
            )}
            {isEditable && (
                <form onSubmit={handleEdit} className={classes.editForm}>
                    <input
                        type='text'
                        onChange={(e) => setEditText(e.target.value)}
                        value={editText}
                    />
                    <div className={classes.actionButtons}>
                        <Button type='submit' img={Confirm} />
                        <Button onClick={() => setIsEditable(current => !current)} img={Cancel} />
                    </div>
                </form>
            )}
            {error && ( <p>{error}</p> )}
        </div>
    );
};

const TaskList = (props) => {
    return (
        <ul className={classes.taskList}>
            {props.taskList.map((task) => (
                <ListItem key={task.id} id={task.id} text={task.textData} onCheck={props.onCheck} onDelete={props.onDelete} />
            ))}
        </ul>
    );
};

export default TaskList;