import { useEffect, useState } from "react";

import { Rating } from "react-simple-star-rating";

export default function BookRating({ openLibraryKey }) {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    fetch(`https://openlibrary.org${openLibraryKey}/ratings.json`)
      .then((res) => res.json())
      .then((ratings) => setRating(ratings.summary.average));
  }, [openLibraryKey]);

  return rating ? <Rating readonly initialValue={rating} /> : "No ratings yet";
}
