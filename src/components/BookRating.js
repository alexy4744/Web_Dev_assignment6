import { useEffect, useState } from "react";

import { Rating } from "react-simple-star-rating";

import { getRatings } from "../api/ratings";

export const BookRating = ({ openLibraryKey }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    getRatings(openLibraryKey).then((ratings) => setRating(ratings.summary.average));
  }, [openLibraryKey]);

  return rating ? <Rating readonly initialValue={rating} /> : "No ratings yet";
};
