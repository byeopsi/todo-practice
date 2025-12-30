import TodoItem from "./TodoItem";
import { useMemo } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoList({ filter }) {
  const { todos } = useTodos();

  const filtered = useMemo(() => {
    // 한번 필터링한 값을 메모해놓기 위해 사용
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.done);
      case "completed":
        return todos.filter((t) => t.done);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <ul>
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
