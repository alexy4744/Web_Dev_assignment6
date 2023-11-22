import React from "react";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <h1>Welcome to the Open Library Explorer!</h1>
      <p>
        This application utilizes the Open Library API to provide information about books and
        authors. Explore the world of literature by searching for your favorite authors or
        discovering random books.
      </p>
      <p>
        Use the navigation above to get started, and enjoy your journey through the vast collection
        of the Open Library.
      </p>
      <ul>
        <li>
          <Link to="author">Search for an author</Link>
        </li>
        <li>
          <Link to="random-books">View random books</Link>
        </li>
      </ul>
    </main>
  );
};