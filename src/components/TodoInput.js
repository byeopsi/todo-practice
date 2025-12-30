import { useRef } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoInput() {
  const inputRef = useRef(null);
  const { addTodo } = useTodos;

  const onSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    addTodo(text);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} placeholder="할 일을 입력하세요" />
      <button>추가</button>
    </form>
  );
}
