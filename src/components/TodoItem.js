import React from "react";
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodos();

  console.log("render: ", TodoItem.text); //성능체크용

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>삭제</button>
    </li>
  );
};

export default React.memo(TodoItem);
