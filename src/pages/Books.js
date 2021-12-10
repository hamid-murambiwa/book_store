import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBOOKS } from '../redux/books/books';
import AddBook from '../components/form';
import Progress from '../components/progress';
import '../styling/Books.css';

function Books() {
  const booklist = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBOOKS());
  }, [dispatch]);

  return (
    <div className="book-con">
      {booklist.map((book) => (
        <div key={book.id} className="sub-con">
          <section className="book-info">
            <h3>
              {book.category}
            </h3>
            <h1>
              {book.title}
            </h1>
            <ul className="navs">
              <li>
                <button type="button" className="btns">
                  Comments
                </button>
              </li>
              <li>
                <button type="button" className="btns" onClick={() => dispatch(removeBook(book.id))}>
                  Remove
                </button>
              </li>
              <li>
                <button type="button" className="btns">
                  Edit
                </button>
              </li>
            </ul>
          </section>
          <Progress />
        </div>
      ))}
      <hr className="line" />
      <AddBook />
    </div>
  );
}

export default Books;
