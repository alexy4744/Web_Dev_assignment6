export const getSubjectWorks = (genre) => {
  const url = `https://openlibrary.org/subjects/${genre}.json`;

  return fetch(url).then((response) => response.json());
};
