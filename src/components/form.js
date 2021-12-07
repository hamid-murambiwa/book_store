import React from 'react';

function AddBook() {
    return (
        <section className="form-con">
            <h2>ADD NEW BOOK</h2>
            <form>
                <input type="text" placeholder="Book title" />
                <select name="categories" id="books" placeholder="Category">
                  <option value="">Category</option>
                  <option value="Action">Action</option>
                  <option value="Food">Food</option>
                  <option value="History">History</option>
                  <option value="Memoir">Memoir</option>
                  <option value="Politics">Politics</option>
                  <option value="Self-Help">Self-Help</option>
                  <option value="Young Adult">Young Adult</option>
                  <option value="Children’s Books">Children’s Books</option>
                  <option value="Crime Thriller">Crime Thriller</option>
                  <option value="Literary Fiction">Literary Fiction</option>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="Poetry">Poetry</option>
                  <option value="Romance">Romance</option>
                </select>
                <button type="submit">
                    ADD BOOK
                </button>
            </form>
        </section>
    );
}

export default AddBook;