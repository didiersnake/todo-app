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
    <div className="max-w-full max-h-14 flex justify-between align-text-top p-3 border-b border-gray-600">
      <div className="flex gap-1">
        <div className="pt-1.5 mx-2">
          <div
            className={
              Boolean(status)
                ? "w-3 h-3 rounded-full bg-transparent border-white border cursor-pointer"
                : "w-3 h-3 rounded-full bg-fuchsia-800 border cursor-pointer"
            }
            onClick={toggle}
          ></div>
        </div>
        <div className="">
          <p
            className={
              Boolean(status)
                ? "first-letter:capitalize cursor-pointer"
                : "opacity-30 first-letter:capitalize cursor-pointer"
            }
          >
            {text}
          </p>
        </div>
      </div>
      <div className="pt-1">
        <i className="gg-close-r" onClick={() => deleteI(id, status_)} />
      </div>
    </div>
  );
};

export default TodoItem;
