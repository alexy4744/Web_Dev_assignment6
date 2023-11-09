import { useState, useEffect } from "react";

export default function AuthorBio({ Author_Key, size = "M" }) {
  const [authorBio, setAuthorBio] = useState("");

  useEffect(() => {
    const authorUrl = `https://openlibrary.org/authors/${Author_Key}.json`;

    if (Author_Key) {
      fetch(authorUrl, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setAuthorBio(
            data.bio && data.bio.value ? data.bio.value : data.bio || "No biography available."
          );
        });
    }
  }, [Author_Key]);

  return (
    <div className="bioSection">
      <div style={{ paddingRight: "20px" }}>
        <img src={`https://covers.openlibrary.org/a/olid/${Author_Key}-${size}.jpg`} />
      </div>
      {authorBio && <p className="bio">{authorBio}</p>}
    </div>
  );
}
