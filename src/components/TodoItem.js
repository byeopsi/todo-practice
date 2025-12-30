import { useTodos } from "../context/TodoContext";
import React from "react";
function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

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
}
// 컴포넌트를 메모함으로서 props인 text, done 가 변하지 않는 한 렌더링 안함
export default React.memo(TodoItem);
