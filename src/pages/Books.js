import React from 'react';

function Books(books) {
  return (
    <div className="book-con">
      <h3>
        {books.genre}
      </h3>
      <h1>
        {books.title}
      </h1>
      <p>
        {books.author}
      </p>
      <ul className="navs">
        <li>
          <button>
            Comments
          </button>
        </li>
        <li>
          <button>
            Remove
          </button>
        </li>
        <li>
          <button>
            Edit
          </button>
        </li>
      </ul>
    </div>
  );
}

Books.defaultProps = {
  title: 'get rich or die tryings',
  author: 'curtis jackson',
  genre: 'action',
};

export default Books;
