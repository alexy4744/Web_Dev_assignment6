## Link to the webpage: https://shion1314.github.io/Web_Dev_assignment5/

## Open Library API

### https://openlibrary.org/authors/OL23919A/works.json
The url above fetech the all the book the author had, identifier key in this case are OL23919A. Identifier key can be find in open Library.Instruction are in this website https://openlibrary.org/dev/docs/api/authors. Could use https://openlibrary.org/authors/OL23919A/works.json?limit={value} to limit the amount of work outputed, as default its 50. The endpoint is used to return all books written by that author in the app.

<img src='Screenshot 2023-11-07 at 4.09.08 PM.png' title='Postman img' width='' alt='postman' />

### https://openlibrary.org/search/authors.json?q=j%20k%20rowling
The url above search the author, identifier key in this case are j%20k%20rowling(Basically author's name). Instruction are in this website
https://openlibrary.org/dev/docs/api/authors. This API contain the key which can be used as a parameter in other openlibrary API. The endpoint is used to return details about the author in the app.

<img src='author_api.png' title='Postman img2' width='' alt='postman2' />

### https://openlibrary.org/works/OL45804W/ratings.json
The endpoint above returns the rating of a specific work, in this case the ID of the work is OL45804W. Click [here](https://openlibrary.org/dev/docs/api/books) for the documentation. The average rating returned from this API call is used to display the star ratings of each work after the user has searched for an author.

<img src='ratings_api.png' title='Screenshot of a successful API call to the ratings endpoint.' alt='Screenshot of a successful API call to the ratings endpoint.' />
