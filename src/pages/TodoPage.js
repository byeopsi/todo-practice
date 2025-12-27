import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function TodoPage({ filter }) {
  return (
    <>
      <TodoInput />
      <TodoList filter={filter} />
    </>
  );
}
