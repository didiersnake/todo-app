import React, { useState } from "react";
import { selectAllTodo } from "./todoSlice";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

export const TodoList = () => {
  const [state, setState] = useState("all");
  const todoItems = useSelector(selectAllTodo);

  const itemsLeft = todoItems.filter((item) => {
    return Boolean(item.active);
  });
  const [activeItems, setActiveItems] = useState(itemsLeft.length);

  const handleClick = (status_) => {
    Boolean(status_)
      ? setActiveItems((prevState) => prevState + 1)
      : setActiveItems((prevState) => prevState - 1);
        
  };

  const todoList = todoItems.map((item) => {
    return (
      <TodoItem
        key={item.id}
        text={item.text}
        status_={item.active}
        onClick={handleClick}
      />
    );
  });

  return (
    <div>
      {todoList}
      <div>
        <div>{activeItems}</div>
      </div>
    </div>
  );
};
