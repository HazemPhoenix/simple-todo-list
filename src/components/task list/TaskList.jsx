import React from "react";
import "./TaskList.scss";

const TaskList = (props) => {
  const { tasks, removeTaskHandler } = props;

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            onClick={() => removeTaskHandler(task.id)}
            className="task-container"
          >
            {task.enteredTask}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
