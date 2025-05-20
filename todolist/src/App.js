import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoOutput from "./Components/TodoOutput";
import TodoContext from "./Components/TodoContext";
import ConfirmModal from "./Components/ConfirmModal";
import { useDispatch } from "react-redux";
import {
  changeStatusToActive,
  changeStatusToInactive,
} from "./redux/slices/editTaskSlice";

function App() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    taskInfo: "",
    state: "pending",
  });
  const [taskList, setTaskList] = useState(
    [] // localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
  );
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [taskFilter, setTaskFilter] = useState("all");

  const hasLoadedFromLocalStorage = useRef(false);
  // useEffect(()=>{
  // const savedTasks=localStorage.getItem("tasks")
  // if(savedTasks){
  //   setTaskList(JSON.parse(savedTasks))
  // }
  // },[])

  useEffect(() => {
    if (!hasLoadedFromLocalStorage.current) {
      const savedTasks = localStorage.getItem("tasks");
      const parsedTask = JSON.parse(savedTasks);
      if (parsedTask) {
        setTaskList(parsedTask);
      }
      hasLoadedFromLocalStorage.current = true;
    } else localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handletaskChange = (e) => {
    setTask({ ...task, taskInfo: e.target.value });
  };

  const handletaskAdd = (t) => {
    if (editIndex !== null) {
      const updatedTasks = [...taskList];
      updatedTasks[editIndex] = t;
      setTaskList(updatedTasks);
      setEditIndex(null);
      dispatch(changeStatusToInactive());
    } else {
      setTaskList([...taskList, t]);
    }

    setTask({
      taskInfo: "",
      state: "pending",
    });
  };


  const handleEdit = (ind) => {
    dispatch(changeStatusToActive());
    console.log("edit index", ind);
    const selectedTask = taskList[ind];
    setTask(selectedTask);
    setEditIndex(ind);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    const updatedTaskList = taskList.filter(
      (t, index) => index !== deleteIndex
    );
    setTaskList(updatedTaskList);
    setIsModalOpen(false);
  };

  const handleStatus = (ind) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[ind].state =
      updatedTaskList[ind].state === "pending" ? "Completed" : "pending";
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <h1 className="heading">TODO App</h1>
      <TodoInput
        task={task}
        setTask={setTask}
        handletaskChange={handletaskChange}
        handletaskAdd={handletaskAdd}
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
      />
      <TodoContext.Provider
        value={{
          taskList,
          handleEdit,
          handleDelete,
          handleStatus,
          taskFilter,
          setTaskFilter,
        }}
      >
        <TodoOutput/>
      </TodoContext.Provider>
      <ConfirmModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        message="Do you really want to delete this task?"
      />
    </>
  );
}

export default App;
