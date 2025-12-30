import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
} from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const addTodo = useCallback((text) => {
    setTodos((todos) => [
      ...todos,
      { id: nextId.current++, text, done: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((todos) =>
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
