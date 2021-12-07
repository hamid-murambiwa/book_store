import React from 'react';

function Books() {
  const booklist = [{
    id: '1', title: 'Get rich or die trying', author: 'Curtis Jackson', genre: 'Action',
  },
  {
    id: '2', title: '48 laws of power', author: 'Robert Greene', genre: 'Action',
  },
  {
    id: '3', title: 'Mastery', author: 'Robert Greene', genre: 'Action',
  }];
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
      ))}
    </div>
  );
}

export default Books;
