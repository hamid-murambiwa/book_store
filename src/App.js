import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import NavBar from './components/navbar';
import AddBook from './components/form';

function App() {
  return (
    <section>
      <NavBar />
      <Routes>
        <Route exact path="*" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <AddBook />
    </section>
  );
}

export default App;
