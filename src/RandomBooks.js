import { useState, useEffect } from "react";

export default function RandomBooks() {
  const [randomBooks, setRandomBooks] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/subjects/fiction.json?limit=20')
      .then((res) => res.json())
      .then((data) => {
        if (data.works && data.works.length) {
          const shuffledBooks = [...data.works].sort(() => 0.5 - Math.random());
          setRandomBooks(shuffledBooks.slice(0, 5));
        }
      })
  }, []);

  return (
    <div>
      {randomBooks.length > 0 ? (
        randomBooks.map((book, index) => (
          <div key={index} className="book-item">
            <h2>{book.title}</h2>
            {book.authors && book.authors.length > 0 && (
              <p>Author: {book.authors.map(author => author.name).join(", ")}</p>
            )}
          </div>
        ))
      ) : (
        <p>Loading random books...</p>
      )}
    </div>
  );
}
