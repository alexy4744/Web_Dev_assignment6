## Link to the webpage: https://alexy4744.github.io/Web_Dev_assignment6

### Assignment 6 Extra Credit 
URL parameter is used to identify the genre user has picked to generate random books. When a user pick a genre they want in the home page, that genre is added as the url parameter (e.g. `/random/fiction`) The random books page will call the Subject API based on the url parameter. 

## Open Library

### Author API

[Documentation Link](https://openlibrary.org/dev/docs/api/authors)

#### Endpoint: https://openlibrary.org/authors/OL23919A/works.json
The url above fetech the all the book the author had, identifier key in this case are OL23919A. Identifier key can be find in open Library.Instruction are in this website https://openlibrary.org/dev/docs/api/authors. Could use https://openlibrary.org/authors/OL23919A/works.json?limit={value} to limit the amount of work outputed, as default its 50.

<img src='Screenshot 2023-11-07 at 4.09.08 PM.png' title='Screenshot of a successful API call to the author works endpoint.' alt='Screenshot of a successful API call to the author work endpoint.' />

#### Endpoint: https://openlibrary.org/search/authors.json?q=j%20k%20rowling
The url above search the author, identifier key in this case are j%20k%20rowling(Basically author's name). Instruction are in this website
https://openlibrary.org/dev/docs/api/authors. This API contain the key which can be used as a parameter in other openlibrary API. The endpoint is used to return details about the author in the app.

<img src='author_api.png' title='Screenshot of a successful API call to the author search endpoint.' alt='Screenshot of a successful API call to the author search endpoint.' />

#### Endpoint: https://openlibrary.org/authors/OL23919A.json
The url above fetch information about the author, identifier key the `olid` assigned to the author you want to search and is fetched from `https://openlibrary.org/search/authors.json?q=j%20k%20rowling`. 
This endpoint was used to fetch the author's bio after a user search. 

<img src='bio_api.png' title='Screenshot of a successful API call to the author info endpoint.' alt='Screenshot of a successful API call to the author info endpoint.'>

### Cover API 

[Documentation Link](https://openlibrary.org/dev/docs/api/books)

#### Endpoint: https://openlibrary.org/works/OL45804W/ratings.json
The endpoint above returns the rating of a specific work, in this case the ID of the work is OL45804W. The average rating returned from this API call is used to display the star ratings of each work after the user has searched for an author.

<img src='ratings_api.png' title='Screenshot of a successful API call to the ratings endpoint.' alt='Screenshot of a successful API call to the ratings endpoint.' />

### Subject API 

[Documentation Link](https://openlibrary.org/dev/docs/api/subjects)

#### Endpoint: http://openlibrary.org/subjects/fiction.json
The endpoint above fetch books that includes the subjects specified in the endpoint. In this case the endpoint is fetching books within the API that are categorized as fiction. This endpoint is used to generate random books based on the genre user has picked. 

<img src='random-api.png' title='Screenshot of a successful API call to the subject endpoint.' alt='Screenshot of a successful API call to the subject endpoint.'>
