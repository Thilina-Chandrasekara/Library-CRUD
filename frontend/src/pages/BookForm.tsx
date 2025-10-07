import { useEffect, useState } from "react";
import { createBook, getBook, updateBook } from "../api/books";
import type { Book } from "../api/books";
import { useNavigate, useParams } from "react-router-dom";

export default function BookForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = !!id;

  const [form, setForm] = useState<Book>({ title: "", author: "", description: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editing) {
      getBook(Number(id))
        .then(r => setForm(r.data))
        .catch(() => setError("Failed to load book"));
    }
  }, [editing, id]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.author) {
      setError("Title and Author are required.");
      return;
    }
    try {
      if (editing) await updateBook(form);
      else await createBook(form);
      navigate("/books");
    } catch (err: any) {
     
      const msg =
        err?.response?.data?.title ||         
        err?.response?.data?.message ||
        (typeof err?.response?.data === "string" ? err.response.data : "") ||
        err?.message ||
        "Save failed";
      setError(String(msg));
      console.error("Save error:", err);      
    }
  };


  return (
    <form onSubmit={onSubmit}>
      <h2>{editing ? "Edit" : "Add"} Book</h2>
      {error && <p>{error}</p>}
      <div>
        <label>Title</label>
        <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}/>
      </div>
      <div>
        <label>Author</label>
        <input value={form.author} onChange={e => setForm({ ...form, author: e.target.value })}/>
      </div>
      <div>
        <label>Description</label>
        <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}/>
      </div>
      <button type="submit">{editing ? "Update" : "Create"}</button>
    </form>
  );
}
