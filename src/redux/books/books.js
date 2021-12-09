import * as API from '../../API/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const getBOOKS = () => async (dispatch) => {
  const books = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GdZkfXCoOXzsSXGK6925/books')
    .then((response) => response.json());
  const ID = Object.keys(books);
  const bookArr = [];
  ID.map((key) => bookArr.push({
    id: key,
    title: books[key][0].title,
    category: books[key][0].category,
  }));
  dispatch(getBooks(bookArr));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOKS:
      return action.payload;
    case REMOVE_BOOK:
      API.deleteBOOK(action.id);
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
