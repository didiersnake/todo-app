import React, { useState } from "react";
import "./todoItem.css";
import Check from "../images/icon-check.svg";

const TodoItem = ({ id, status_, text, onClick, deleteI }) => {
  const [status, setStatus] = useState(status_);

  //on click change item active status
  // fix number of active items
  const toggle = () => {
    setStatus((prev) => !prev);
    onClick(!status, id, status_, text);
  };
  return (
    <div className="group max-w-full max-h-14 flex justify-between items-center p-3 border-b border-gray-600">
      <div className="flex gap-1 items-center">
        <div className="mx-2">
          {Boolean(status) ? (
            <div
              className={
                "w-4 h-4 rounded-full bg-transparent border-gray-600 border cursor-pointer"
              }
              onClick={toggle}
            ></div>
          ) : (
              <div className="w-4 h-4 rounded-full bg-[#9E7BF3] flex items-center justify-center"
              onClick={toggle}>
              <img src={Check} alt="check" />
            </div>
          )}
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
      <div className="invisible group-hover:visible">
        <i className="gg-close-r" onClick={() => deleteI(id, status_)} />
      </div>
    </div>
  );
};

export default TodoItem;
