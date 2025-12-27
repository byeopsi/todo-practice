import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import TodoPage from "./pages/TodoPage";

// NavLink는 UI 같고? Routes는 실제 눌럿을떄 뭘로 이동할지 선언한듯?
export default function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <nav>
          <NavLink to="/">All</NavLink>
          <NavLink to="/active">Active</NavLink>
          <NavLink to="/completed">Completed</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<TodoPage filter="all" />} />
          <Route path="/active" element={<TodoPage filter="active" />} />
          <Route path="/completed" element={<TodoPage filter="completed" />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}
