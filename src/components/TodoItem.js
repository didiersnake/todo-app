import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./todoItem.css"
import { setActiveItem } from "../features/todoSlice";

const TodoItem = ({ id, status_, text, onClick, deleteI}) => {
  const [status, setStatus] = useState(status_);
  const dispatch = useDispatch();

    //on click change item active status 
    // fix number of active items
  const toggle = () => {
      dispatch(setActiveItem({id:id}))
      setStatus(prevState => !prevState);
      onClick(!status)
    };
  return (
    <div className="label">
      <div
        className={Boolean(status) ? "active" : "active completed"}
        onClick={toggle}
        
      />
      <p>{text}</p>
      <div className="gg-close-r" onClick={() => deleteI(id)}></div>
    </div>
  );
};

export default TodoItem;
