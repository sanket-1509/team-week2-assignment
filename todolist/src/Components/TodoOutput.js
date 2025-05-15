import React, { useContext } from "react";
import "./TodoOutput.css";
import TodoSingleItem from "./TodoSingleItem";
import TodoContext from "./TodoContext";
const TodoOutput = () => {
  const { taskList, taskFilter } = useContext(TodoContext);
  return (
    <>
      <div className="header"> Your Tasks</div>
      <div className="opt">
        {taskList
          .filter((task) => {
            if (taskFilter === "all") return true;
            else return taskFilter == task.state;
          })
          .map((task, index) => {
            return <TodoSingleItem task={task} index={index} />;
          })}
      </div>
    </>
  );
};
export default TodoOutput;
