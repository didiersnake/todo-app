import React, { useState } from "react";
import { selectAllTodo } from "./todoSlice";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

export const TodoList = () => {
    const [state, setState] = useState("all");
    const [input, setInput] = useState("");
  const todoItems = useSelector(selectAllTodo);

  const handleClick = (status_) => {
    Boolean(status_)
      ? setActiveItems((prevState) => prevState + 1)
      : setActiveItems((prevState) => prevState - 1);
  };

    const handleChange = (e) => {
        setInput(e.target.value)
    }

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

    const clearCompleted = () => {
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
      <div>
        <input placeholder="Typing..." type="text" value={input} onChange={handleChange} className=""></input>
      </div>
      <div>{content}</div>
      <div>
        <div>{`${activeItems} items left`}</div>
        <div>
          <button onClick={() => displayStatus("all")}>All</button>
          <button onClick={() => displayStatus("active")}>Active</button>
          <button onClick={() => displayStatus("completed")}>Completed</button>
        </div>
        <div>
          <button onClick={clearCompleted}>Clear completed</button>
        </div>
      </div>
    </div>
  );
};
