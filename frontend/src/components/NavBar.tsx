import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/books">Books</Link>{" | "}
      <Link to="/books/new">Add Book</Link>
    </nav>
  );
}
