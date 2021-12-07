import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
     return (
         <header className="H-con">
             <section className="text">
             <h1>
                 Bookstore CMS
             </h1>
            <ul className="list-nav">
                <li>
                <Link to="/books" className="links">BOOKS</Link>
                </li>
                <li>
                <Link to="/categories" className="links">CATEGORIES</Link>
                </li>
            </ul>
             </section>
             <div className="acc-btn">
                 <button className="user-btn">
                 <img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/50/000000/external-user-user-interface-kmg-design-flat-kmg-design-1.png" alt="account icon"/>
                 </button>
             </div>
         </header>
     )
}

export default NavBar;