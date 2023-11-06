import React, { useState, useEffect } from 'react';

export default function AuthorBooks() {
  const [authorWorks, setAuthorWorks] = useState([]);
  const [author, setAuthor] = useState(" ");

  useEffect(()=>{
  const authorWorksUrl = 'https://openlibrary.org/authors/OL23919A/works.json';
  const authroUrl = 'https://openlibrary.org/authors/OL23919A.json';
  fetch(authorWorksUrl,{method: "GET"})
  .then((response)=>response.json())
  .then(data=>{
    setAuthorWorks(data.entries)
  })
  fetch(authroUrl,{method: "GET"})
  .then((response)=>response.json())
  .then(data=>{
    setAuthor(data.personal_name)
  })
  });
  return (
    <div>
      <h1>{author}'s Books</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {authorWorks.map((work, index) => (
              <tr key={index}>
                <td>{work.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}