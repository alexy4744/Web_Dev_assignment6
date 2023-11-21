export const getRatings = (olid) => {
  const url = `https://openlibrary.org${olid}/ratings.json`;

  return fetch(url).then((response) => response.json());
};
