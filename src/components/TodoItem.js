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
    <div className="flex justify-between p-2 border-b-slate-50 border-b">
      <div className="flex justify-center align-middle gap-6">
        <div
          className={
            Boolean(status)
              ? "w-4 h-4 rounded-full bg-transparent border-white border-2"
              : "active completed"
          }
          onClick={toggle}
        />
        <p>{text}</p>
      </div>
      <div className="gg-close-r " onClick={() => deleteI(id, status_)}></div>
    </div>
  );
};

export default TodoItem;
