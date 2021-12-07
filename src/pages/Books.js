import React from 'react';
import PropTypes from 'prop-types';

function Books({ book }) {
  return (
    <div className="book-con">
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
          <button type="button">
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
  );
}

Books.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
  }),
};

Books.defaultProps = {
  book: {
    title: 'Get rich or die trying', author: 'Curtis Jackson', genre: 'Action',
  },
};

export default Books;
