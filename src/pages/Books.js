import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Books() {
  const booklist = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  return (
    <div className="book-con">
      {booklist.map((book) => (
        <div key={book.id}>
          <h3>
            {book.genre}
          </h3>
          <h1>
            {book.title}
          </h1>
          <p>
            {book.author}
          </p>
          <ul className="navs">
            <li>
              <button type="button">
                Comments
              </button>
            </li>
            <li>
              <button type="button" onClick={() => dispatch(removeBook(book.id))}>
                Remove
              </button>
            </li>
            <li>
              <button type="button">
                Edit
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Books;
