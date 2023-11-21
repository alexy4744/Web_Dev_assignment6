import React from "react";

import { Link } from "react-router-dom";

export const Home = () => {
    const genre = ["fiction", "romance", "fantasy", "horror", "history", "music", "film"]

    return (
        <main>
            <div style={{ margin: "10%", marginTop: "5%", fontSize: "1.20em", lineHeight: "2" }}>
                <h1>Welcome to the Open Library Explorer!</h1>
                <p style={{ margin: "3%" }}>
                    This application utilizes the Open Library API to provide information about books and
                    authors. Explore the world of literature by searching for your favorite authors or
                    discovering random books.
                </p>
                <p>
                    Use the navigation below to get started, and enjoy your journey through the vast collection
                    of the Open Library.
                </p>
                <div style={{ marginLeft: "3%" }}>
                    <ul style={{ display: "inline-block" }}>
                        <li>
                            <Link to="author">Search for an Author</Link>
                        </li>
                        <li>
                            <p>View Random Books Based on Genres:</p>
                            <ul style={{ display: "flex", width: "55vw", justifyContent: "space-around", listStyleType: "none" }}>
                                {genre.map((genre, i) => (
                                    <li key={i}>
                                        <Link to={`random-books/${genre}`}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};