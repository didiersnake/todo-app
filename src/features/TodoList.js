import React, { useState } from "react";
import { addItem, selectAllTodo, deleteItem, deleteCompleted, setActiveItem } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

export const TodoList = () => {
  const [state, setState] = useState("all");
  const [input, setInput] = useState(() => "");
  const todoItems = useSelector(selectAllTodo);
  const dispatch = useDispatch();

  // fetch uncompleted items number
  const itemsLeft = todoItems.filter((item) => {
    return Boolean(item.active);
  });
  const [activeItems, setActiveItems] = useState(itemsLeft.length);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Set active and inactive todo items
  const handleClick = (status_, id, text) => {
    Boolean(status_)
      ? setActiveItems((prevState) => prevState + 1)
      : setActiveItems((prevState) => prevState - 1);
    
      dispatch(setActiveItem({ id: id }));
  };

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

  const orderedTodoList = todoItems.slice().sort((a, b) => b.date.localeCompare(a.date))
  //todoList state items to display (active, completed)
  const displayStatus = (status) => {
    return setState(status);
  };

  //Add todo item
  const addTodoItem = (e) => {
    if (e.key === "Enter") {
      // Handle the stucture in slice using prepare callback makes it more abstract
      dispatch(addItem(input));
      setActiveItems((prevState) => prevState + 1);
      setInput("");
    }
  };

  //delete item
  const deleteTodoItem = (id) => {
    dispatch(deleteItem({ id: id }));
  };

  const clearCompleted = () => {
    dispatch(deleteCompleted())
  };

  let content;
  if (state === "all") {
    content = orderedTodoList.map((item) => {
      return (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          status_={item.active}
          onClick={handleClick}
          deleteI={deleteTodoItem}
        />
      );
    });
  } else if (state === "active") {
    content = orderedTodoList.map((item) => {
      return (
        Boolean(item.active) && (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            status_={item.active}
            onClick={handleClick}
            deleteI={deleteTodoItem}
          />
        )
      );
    });
  } else if (state === "completed") {
    content = orderedTodoList.map((item) => {
      return (
        Boolean(!item.active) && (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            status_={item.active}
            onClick={handleClick}
            deleteI={deleteTodoItem}
          />
        )
      );
    });
  }

  return (
    <div>
      <div>
        <input
          placeholder="Typing..."
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={addTodoItem}
          className=""
        />
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
