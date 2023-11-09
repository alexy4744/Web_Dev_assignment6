import React, { useState, useEffect } from "react";
import BookRating from "./BookRating";

export default function AuthorBooks({ Author_Key }) {
  const [author_Works, setAuthorWorks] = useState([]);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const authorWorksUrl = `https://openlibrary.org/authors/${Author_Key}/works.json?limit=100`;
    const authorUrl = `https://openlibrary.org/authors/${Author_Key}.json`;

    if (Author_Key) {
      fetch(authorWorksUrl, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setAuthorWorks(data.entries);
        });

      fetch(authorUrl, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setAuthor(data.personal_name);
        });
    }
  }, [Author_Key]);
  return (
    <div>
      {author && (
        <>
          <h1>{author}'s Books</h1>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Ratings</th>
                </tr>
              </thead>
              <tbody>
                {author_Works.map((work) => (
                  <tr>
                    <td>{work.title}</td>
                    <td>
                      <BookRating key={`rating${work.key}`} openLibraryKey={work.key} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
