const axios = require('axios');

const GetBooksWithoutRating = () => axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks').then(books => books.data);

const GetRatingForGivenBookId = id => axios.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`).then(rating => rating.data);

const GetBooksWithRating = () => GetBooksWithoutRating().then((AllBooks) => {
  const Books = AllBooks.books;
  const BooksWithRating = Books.map(book => GetRatingForGivenBookId(book.id));
  return Promise.all(BooksWithRating).then(ratings => Books.map((book, index) => { const BookWithRating = book; BookWithRating.rating = ratings[index].rating; return BookWithRating; })).catch((err) => { console.log(err); });
});

const GetBooksWithRatingSorted = () => GetBooksWithRating().then((BooksWithRating) => {
  const BooksWithRatingSorted = {};
  BooksWithRating.forEach((book) => {
    if (BooksWithRatingSorted[book.Author] === undefined) {
      BooksWithRatingSorted[book.Author] = [];
      BooksWithRatingSorted[book.Author].push(book);
    } else {
      BooksWithRatingSorted[book.Author].push(book);
    }
  });
  return BooksWithRatingSorted;
});

module.exports = { GetBooksWithoutRating, GetBooksWithRating, GetBooksWithRatingSorted };
