export const createAuthorCoverUrl = (authorKey, size = "M") => {
  return `https://covers.openlibrary.org/a/olid/${authorKey}-${size}.jpg`;
};

export const getAuthor = (authorKey) => {
  const url = `https://openlibrary.org/authors/${authorKey}.json`;

  return fetch(url).then((response) => response.json());
};

export const getAuthorWorks = (authorKey) => {
  const url = `https://openlibrary.org/authors/${authorKey}/works.json`;

  return fetch(url).then((response) => response.json());
};

export const searchAuthor = (name) => {
  const url = new URL("https://openlibrary.org/search/authors.json");

  url.searchParams.set("q", name);

  return fetch(url).then((response) => response.json());
};
