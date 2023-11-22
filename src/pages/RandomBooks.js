import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { getSubjectWorks } from "../api/subjects";

import { BookRating } from "../components/BookRating";

import { setRandomBooks } from "../store";

export const RandomBooks = () => {
  const { genre } = useParams();
  const dispatch = useDispatch();

  const randomBooks = useSelector((state) => state.global.randomBooks);

  useEffect(() => {
    getSubjectWorks(genre).then((data) => dispatch(setRandomBooks(data.works)));
  }, []);

  return (
    <main>
      <Link to="/">Go back</Link>
      <h1>{genre.charAt(0).toUpperCase() + genre.slice(1)} Books</h1>

      {randomBooks.length > 0 ? (
        <ul>
          {randomBooks.map((book) => (
            <li key={book.key}>
              <h3>Title: {book.title}</h3>
              <p>Author: {book.authors.map((author) => author.name).join(", ")}</p>
              <BookRating openLibraryKey={book.key} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading random books...</p>
      )}
    </main>
  );
};