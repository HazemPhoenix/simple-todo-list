import React from "react";
import "./Form.scss";

const Form = (props) => {
  const { onSubmit, onChange, value } = props;
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          onChange={onChange}
          value={value}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Form;
