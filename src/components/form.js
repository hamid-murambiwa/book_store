import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as API from '../API/api';
import { addBook } from '../redux/books/books';

const categories = ['Romance', 'History', 'Drama', 'Memoir', 'Politics', 'Self-Help', 'Horror', 'Young Adult', 'Children’s Books', 'Crime Thriller', 'Tragedy', 'Literary Fiction', 'Science Fiction', 'Gothic', 'Philosophy', 'Food'];

function AddBook() {
  const [category, setcategory] = useState(categories[0]);
  const [title, setTitle] = useState('');

  const handlecategory = (event) => setcategory(event.target.value);
  const handleTitle = (event) => setTitle(event.target.value);
  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    const idNum = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5);

    const newBook = {
      item_id: idNum,
      id: idNum,
      title,
      category,
    };

    dispatch(addBook(newBook));
    API.addBOOK(newBook);
    setTitle('');
    setcategory(categories[0]);
    event.preventDefault();
    document.getElementById('myForm').reset();
  };

  return (
    <section className="form-con">
      <h2>ADD NEW BOOK</h2>
      <form id="myForm" onSubmit={submitBookToStore}>
        <input id="title" type="text" onChange={handleTitle} placeholder="Book title" required />
        <select value={category} onChange={handlecategory}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
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
