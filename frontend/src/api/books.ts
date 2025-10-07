import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5228/api",
});

export type Book = {
  id?: number;
  title: string;
  author: string;
  description?: string;
};

export const getBooks = () => api.get<Book[]>("/books");
export const getBook = (id: number) => api.get<Book>(`/books/${id}`);
export const createBook = (b: Book) => api.post<Book>("/books", b);
export const updateBook = (b: Book) => api.put(`/books/${b.id}`, b);
export const deleteBook = (id: number) => api.delete(`/books/${id}`);
