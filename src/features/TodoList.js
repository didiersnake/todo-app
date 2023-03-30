import React, { useState } from "react";
import { selectAllTodo } from "./todoSlice";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

export const TodoList = () => {
  const [state, setState] = useState("all");
  const todoItems = useSelector(selectAllTodo);

  const handleClick = (status_) => {
    Boolean(status_)
      ? setActiveItems((prevState) => prevState + 1)
      : setActiveItems((prevState) => prevState - 1);
  };

  // fetch uncompleted items number
  const itemsLeft = todoItems.filter((item) => {
    return Boolean(item.active);
  });
  const [activeItems, setActiveItems] = useState(itemsLeft.length);

 /* 

  // fetch completed topics
  const completedItems = todoItems.map((item) => {
    return (
      Boolean(!item.active) && (
        <TodoItem
          key={item.id}
          text={item.text}
          status_={item.active}
          onClick={handleClick}
        />
      )
    );
  });

  //fetch all items
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

 */
  const displayStatus = (status) => {
    return setState(status);
  };

  let content;
  if (state === "all") {
    content = todoItems.map((item) => {
      return (
        <TodoItem
          key={item.id}
          text={item.text}
          status_={item.active}
          onClick={handleClick}
        />
      );
    });
  } else if (state === "active") {
    content = todoItems.map((item) => {
      return (
        Boolean(item.active) && (
          <TodoItem
            key={item.id}
            text={item.text}
            status_={item.active}
            onClick={handleClick}
          />
        )
      );
    });
  } else if (state === "completed") {
    content = todoItems.map((item) => {
      return (
        Boolean(!item.active) && (
          <TodoItem
            key={item.id}
            text={item.text}
            status_={item.active}
            onClick={handleClick}
          />
        )
      );
    });
  }

  return (
    <div>
      {content}
      <div>
        <div>{`${activeItems} items left`}</div>
        <div>
          <button onClick={() => displayStatus("all")}>All</button>
          <button onClick={() => displayStatus("active")}>Active</button>
          <button onClick={() => displayStatus("completed")}>Completed</button>
        </div>
        <div>
            <button>Clear completed</button>
        </div>
      </div>
    </div>
  );
};
