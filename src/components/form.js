import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const genres = ['Romance', 'History', 'Drama', 'Memoir', 'Politics', 'Self-Help', 'Horror', 'Young Adult', 'Children’s Books', 'Crime Thriller', 'Tragedy', 'Literary Fiction', 'Science Fiction', 'Gothic', 'Philosophy', 'Food'];

function AddBook() {
  const [genre, setGenre] = useState(genres[0]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handlegenre = (event) => setGenre(event.target.value);
  const handleTitle = (event) => setTitle(event.target.value);
  const handleAuthor = (event) => setAuthor(event.target.value);
  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    const newBook = {
      id: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5),
      title,
      author,
      genre,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setGenre(genres[0]);
    event.preventDefault();
    document.getElementById('myForm').reset();
  };

  return (
    <section className="form-con">
      <h2>ADD NEW BOOK</h2>
      <form id="myForm" onSubmit={submitBookToStore}>
        <input id="title" type="text" onChange={handleTitle} placeholder="Book title" required />
        <input id="author" type="text" name="author" onChange={handleAuthor} placeholder="Author" required />
        <select value={genre} onChange={handlegenre}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <button type="submit" value="ADD BOOK">
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default AddBook;
