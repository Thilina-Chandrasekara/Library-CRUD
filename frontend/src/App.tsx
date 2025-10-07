import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BooksList from "./pages/BooksList";
import BookForm from "./pages/BookForm";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/new" element={<BookForm />} />
          <Route path="/books/:id/edit" element={<BookForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
