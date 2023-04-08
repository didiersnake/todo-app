import React, { useState } from "react";
import "./todoItem.css"

const TodoItem = ({ id, status_, text, onClick, deleteI}) => {
  const [status, setStatus] = useState(status_);

    //on click change item active status 
    // fix number of active items
  const toggle = () => {
      setStatus((prev)=> !prev)
      onClick(!status, id, status_, text)
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
