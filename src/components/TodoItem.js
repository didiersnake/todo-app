import React, { useState } from "react";

const TodoItem = ({ status_, text }) => {
  const [status, setStatus] = useState(status_);

  const toggle = () => {
      setStatus((prevState) => !prevState);
      console.log("clicked")
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
