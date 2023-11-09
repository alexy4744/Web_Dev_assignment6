import React, { useState, useEffect } from "react";

import BookRating from "./BookRating";

export default function AuthorBooks() {
  const [author_Works, setAuthorWorks] = useState([]);
  const [author, setAuthor] = useState("");
  const [User_Input, setName] = useState("");
  const [Author_Key, setKey] = useState("");
  const [Button_Clicked, Clicked] = useState(false);

  const Click_Button = () => {
    Clicked(true);
  };

  useEffect(() => {
    // Fetch the author key based on the author's name
    if (Button_Clicked && User_Input) {
      const authorSearchUrl = `https://openlibrary.org/search/authors.json?q=${User_Input}`;

      fetch(authorSearchUrl, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          if (data.docs.length > 0) {
            setKey(data.docs[0].key);
          } else {
            setKey("");
          }
        });
      Clicked(false);
    }
  }, [Button_Clicked, User_Input]);

  useEffect(() => {
    const authorWorksUrl = `https://openlibrary.org/authors/${Author_Key}/works.json?limit=100`;
    const authorUrl = `https://openlibrary.org/authors/${Author_Key}.json`;

    if (Author_Key) {
      fetch(authorWorksUrl, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setAuthorWorks(data.entries);
          console.log(data);
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
      <label>
        Enter Author's Name:
        <input type="text" value={User_Input} onChange={(name) => setName(name.target.value)} />
      </label>

      <button onClick={Click_Button}>Search</button>

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
