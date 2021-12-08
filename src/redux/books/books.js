const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: '1', title: 'Get rich or die trying', author: 'Curtis Jackson', genre: 'Literary Fiction',
  },
  {
    id: '2', title: '48 laws of power', author: 'Robert Greene', genre: 'History',
  },
  {
    id: '3', title: 'Mastery', author: 'Robert Greene', genre: 'Philosophy',
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
