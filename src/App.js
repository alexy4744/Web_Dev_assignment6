import { useState, useEffect } from "react";

import AuthorBooks from "./AuthorBooks";
import AuthorBio from "./AuthorBio";
import RandomBooks from "./RandomBooks";

export default function App() {
  const [User_Input, setName] = useState("");
  const [Author_Key, setKey] = useState("");
  const [Button_Clicked, Clicked] = useState(false);
  const [showRandomBooks, setShowRandomBooks] = useState(false);

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
        })
        .finally(() => Clicked(false));
    }
  }, [Button_Clicked, User_Input]);

  const handleShowRandomBooks = () => {
    setShowRandomBooks(!showRandomBooks);
  };

  return (
    <main>
      <div className="searchBar">
        <button style={{ marginRight: "6px" }} onClick={(handleShowRandomBooks)}>
          {showRandomBooks ? "Hide Random Books" : "Show Random Books"}
        </button>
        <label style={{ marginRight: "6px" }}> Enter Author's Name:</label>
        <input type="text" value={User_Input} onChange={(name) => setName(name.target.value)} />

        <button style={{ marginLeft: "6px" }} onClick={() => Clicked(true)}>
          Search
        </button>
      </div>
      {showRandomBooks && <RandomBooks />}
      {Author_Key && (
        <>
          <AuthorBio Author_Key={Author_Key} />
          <AuthorBooks Author_Key={Author_Key} />
        </>
      )}
    </main>
  );
}
