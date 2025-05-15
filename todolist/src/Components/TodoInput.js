import React, { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ task, setTask, handletaskChange, handletaskAdd ,taskFilter, setTaskFilter}) => {
  
  return (
    <>
      <div className="input">
        <input
          className="taskinput"
          placeholder="Enter your task here"
          onChange={handletaskChange}
          value={task.taskInfo}
          maxLength={50}
        />
              <div className={`charCount ${task.taskInfo.length==50 ?"exceed":""}`}>{task.taskInfo.length}/50</div>
        <button
          className="add-btn"
          onClick={() => {
            if (task.taskInfo.trim()) {
              handletaskAdd({ taskInfo: task.taskInfo, state: task.state });
            }
          }}
        >
          Add Task
        </button>
        <select className="dropdown"
        value={taskFilter}
          onChange={(e) => {
            console.log("taskfilter",e.target.value)
            setTaskFilter(e.target.value);
          }}
        >
          <option value={"all"}>All</option>
          <option value={"pending"}>Pending</option>
          <option value={"Completed"}>Completed</option>
        </select>
      </div>

    </>
  );
};

export default TodoInput;
