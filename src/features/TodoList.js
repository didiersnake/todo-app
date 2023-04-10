import React, { useState } from "react";
import {
  addItem,
  selectAllTodo,
  deleteItem,
  deleteCompleted,
  setActiveItem,
} from "./todoSlice";
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

  const orderedTodoList = todoItems
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
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
  const deleteTodoItem = (id, status_) => {
    Boolean(status_) && setActiveItems((prevState) => prevState - 1);
    dispatch(deleteItem({ id: id }));
  };

  const clearCompleted = () => {
    dispatch(deleteCompleted());
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
    <div className="text-white flex justify-center align-middle flex-col gap-5 md:gap-10 dark:text-[#000000]">
      <div className="w-full flex bg-[#25273C] rounded gap-1  dark:bg-slate-100">
        <div className="w-4 h-4 ml-5 mr-2 my-5 rounded-full bg-transparent border-gray-600 border dark:border-gray-300"></div>

        <input
          placeholder="currently typing..."
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={addTodoItem}
          className="w-full p-3 pl-0 text-white placeholder:italic border-transparent rounded bg-[#25273C] dark:bg-slate-100 dark:text-black focus:outline-none"
        />
      </div>

      <div className="border bg-[#25273C] dark:bg-white border-transparent rounded-md shadow-2xl">
        <div className="">{content}</div>
        <div className="p-3 flex justify-between min-w-full text-sm">
          <div className="opacity-30">{`${activeItems} items left`}</div>
          <div className="flex gap-2 invisible md:visible lg:visible">
            <button
              className={state === "all" && "text-blue-600"}
              onClick={() => displayStatus("all")}
            >
              All
            </button>
            <button
              className={state === "active" && "text-blue-600"}
              onClick={() => displayStatus("active")}
            >
              Active
            </button>
            <button
              className={state === "completed" && "text-blue-600"}
              onClick={() => displayStatus("completed")}
            >
              Completed
            </button>
          </div>
          <div>
            <button onClick={clearCompleted}>Clear completed</button>
          </div>
        </div>
      </div>

      <div className="max-w-full max-h-14 flex justify-center items-center p-3 bg-[#25273C] rounded shadow-2xl visible md:invisible lg:invisible">
        <div className="flex gap-2">
          <button
            className={state === "all" && "text-blue-600"}
            onClick={() => displayStatus("all")}
          >
            All
          </button>
          <button
            className={state === "active" && "text-blue-600"}
            onClick={() => displayStatus("active")}
          >
            Active
          </button>
          <button
            className={state === "completed" && "text-blue-600"}
            onClick={() => displayStatus("completed")}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};
