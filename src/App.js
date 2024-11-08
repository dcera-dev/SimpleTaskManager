import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import TaskSubmitter from './components/TaskSubmitter';
import TaskList from './components/TaskListItems';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [numChecked, setNumChecked] = useState(0);

  const addTaskHandler = (textData) => {
    setTaskList((prevTaskList) => {
      var idGen = Math.random().toString();
      return [
        ...prevTaskList,
        { textData: textData, id: idGen, key: idGen }
      ];
    });
  };

  function handleCheck(checked) {
    if (checked)
      setNumChecked(numChecked + 1);
    else setNumChecked(numChecked - 1);
  }

  function handleDelete(id) {
    let newTaskList = [];
    taskList.forEach((task) => {
      //For each item in taskList, re-add to taskList unless it matches the id.
      if (task.key !== id) {
        newTaskList.push(task);
      }
    })
    setTaskList(newTaskList);
  }

  return (
    //Root
    <div>
      <Header tasksDone={numChecked} tasksNotDone={taskList.length.toString()}/>
      <TaskSubmitter onAddTask={addTaskHandler} />
      <TaskList taskList={taskList} onCheck={handleCheck} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
