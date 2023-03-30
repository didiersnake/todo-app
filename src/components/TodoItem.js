import React, { useState } from "react";
import "./todoItem.css"

const TodoItem = ({ status_, text, onClick}) => {
  const [status, setStatus] = useState(status_);

    //on click change item active status 
    // fix number of active items
  const toggle = () => {
      setStatus((prevState) => !prevState);
      onClick(!status)
    };
    
  return (
    <div className="label">
      <div
        className={status ? "active" : " active completed"}
        onClick={toggle}
        
      />
      <p>{text}</p>
      <div className="gg-close-r"></div>
    </div>
  );
};

export default TodoItem;
