// 전역 상태 한 번에 관리하기
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

  // useCallback 써서 인자가 모두 바뀌지 않는 한 함수가 재생성되지 않게 하기
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

  // .Provider로 지정해줌으로써 value라는 객체(안의 값과 함수들)는
  // TodoContext를 통해 전역으로 사용할 수 있게 됏음
  // {children}을 넣은 이유: TodoContext로 감싸진 모든 엘리멘트가 value객체를 사용할 수 잇게해줌
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// 그냥 매번 useContext(TodoContext)쓰기 귀찮으니까
// useTodos = {value안의값} 이렇게 쓰려고 만든거라고함
export function useTodos() {
  return useContext(TodoContext);
}
