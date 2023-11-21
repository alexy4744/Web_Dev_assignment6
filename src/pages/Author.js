import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { Link } from "react-router-dom";

import { createAuthorCoverUrl, searchAuthor } from "../api/authors";

import { reset, setAuthor } from "../store";

export const Author = () => {
  const dispatch = useDispatch();

  const author = useSelector((state) => state.global.author);

  const [authorQuery, setAuthorQuery] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    searchAuthor(authorQuery).then(({ docs }) => {
      if (docs.length > 0) {
        dispatch(setAuthor(docs[0]));
      }
    });
  };

  return (
    <main>
      <Link to="/">Go back</Link>

      <form onSubmit={handleFormSubmit} onReset={() => dispatch(reset())}>
        <label>
          Enter Author's Name:
          <input
            type="text"
            disabled={!!author}
            value={author?.name || authorQuery}
            onChange={(event) => setAuthorQuery(event.target.value)}
          />
        </label>

        <button type="submit">Search</button>
        <button type="reset">Reset</button>
      </form>

      {author && (
        <div>
          <h1>{author.name}</h1>

          <div style={{ paddingRight: "20px" }}>
            <img src={createAuthorCoverUrl(author.key)} />
          </div>

          <p className="bio">
            {author.bio && author.bio.value
              ? author.bio.value
              : author.bio || "No biography available."}
          </p>

          <Link to="books">View {author.name}'s books</Link>
        </div>
      )}
    </main>
  );
};
