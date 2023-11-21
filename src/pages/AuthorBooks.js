import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Navigate } from "react-router-dom";

import { getAuthorWorks } from "../api/authors";

import { BookRating } from "../components/BookRating";

import { setBooks } from "../store";

export const AuthorBooks = () => {
  const author = useSelector((state) => state.global.author);
  const books = useSelector((state) => state.global.books);

  const dispatch = useDispatch();

  useEffect(() => {
    getAuthorWorks(author.key).then(({ entries }) => dispatch(setBooks(entries)));
  }, []);

  if (!author) {
    return <Navigate to="/author" />;
  }

  return (
    <main>
      <h1>{author.name}'s Books</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Ratings</th>
          </tr>
        </thead>

        <tbody>
          {books ? (
            books.map((book) => (
              <tr key={book.key}>
                <td>{book.title}</td>
                <td>
                  <BookRating openLibraryKey={book.key} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Loading books...</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};