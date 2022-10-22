import React, { useState } from "react";
import Form from "./components/form/Form";
import TaskList from "./components/task list/TaskList";
import "./App.scss";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [enteredTask, setEnteredTask] = useState("");

  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredTask) {
      setTasks([...tasks, { enteredTask, id: Math.random() * 100 }]);
      setEnteredTask("");
    } else return;
  };

  const removeTaskHandler = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div className="container">
      <Form
        onSubmit={submitHandler}
        onChange={taskChangeHandler}
        value={enteredTask}
      />
      <TaskList tasks={tasks} removeTaskHandler={removeTaskHandler} />
    </div>
  );
};

export default App;
