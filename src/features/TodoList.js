
import React, { useState } from "react";
import { selectAllTodo } from "./todoSlice";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

export const TodoList = () => {
  const [state, setState] = useState("all");
  const todoItems = useSelector(selectAllTodo);
  const todoList = todoItems.map((item) => {
    return <TodoItem text={item.text} status_={item.active} />;
  });

  return <div>{todoList}</div>;
};
