import { useState, useEffect } from "react";

import AuthorBooks from "./AuthorBooks";
import AuthorBio from "./AuthorBio";

export default function App() {
  const [User_Input, setName] = useState("");
  const [Author_Key, setKey] = useState("");
  const [Button_Clicked, Clicked] = useState(false);

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

  return (
    <main>
      <div class="searchBar">
        <label style={{marginRight: "6px"}}>
          Enter Author's Name:
        </label>
        <input type="text" value={User_Input} onChange={(name) => setName(name.target.value)} />
        <button style={{marginLeft: "6px"}} onClick={() => Clicked(true)}>Search</button>
      </div>
      {Author_Key && (
        <>
          <AuthorBio Author_Key={Author_Key} />
          <AuthorBooks Author_Key={Author_Key} />
        </>
      )}
    </main>
  );
}
