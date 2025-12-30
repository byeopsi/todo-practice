import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import TodoPage from "./pages/TodoPage";

export default function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <nav>
          <NavLink to="/">All</NavLink>
          <NavLink to="/active">Active</NavLink>
          <NavLink to="/complete">complete</NavLink>
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
