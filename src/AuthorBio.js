import { useState, useEffect } from "react";

export default function AuthorBio({ Author_Key, size = "M" }) {
    const [authorBio, setAuthorBio] = useState("");

    useEffect(() => {
        const authorUrl = `https://openlibrary.org/authors/${Author_Key}.json`;

        if (Author_Key) {
            fetch(authorUrl, { method: "GET" })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setAuthorBio(data.bio.value ? data.bio.value : data.bio);
                });
        }
    }, [Author_Key]);

    return (
        <div class="bioSection" >
            <div style={{paddingRight: "20px"}}>
                <img src = {`https://covers.openlibrary.org/a/olid/${Author_Key}-${size}.jpg`} />
            </div>
            {authorBio && <p class="bio">{authorBio}</p>}
        </div>
    );
};