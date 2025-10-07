import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../api/books";
import type { Book } from "../api/books";
import { Link } from "react-router-dom";

export default function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getBooks()
      .then(r => setBooks(r.data))
      .catch(() => setError("Failed to load books"));
  }, []);

  const onDelete = async (id?: number) => {
    if (!id) return;
    await deleteBook(id);
    setBooks(prev => prev.filter(b => b.id !== id));
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Books</h2>
      {books.length === 0 && <p>No books yet.</p>}
      <ul>
        {books.map(b => (
          <li key={b.id}>
            <strong>{b.title}</strong> — {b.author}{" "}
            <Link to={`/books/${b.id}/edit`}>Edit</Link>{" | "}
            <button onClick={() => onDelete(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
