import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../categoryslice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger" style={{ fontWeight: "bold" }}>
      <Link className="navbar-brand ms-4" to="/"><span className='text-light ms-4 me-4 p-2'>NEWS PORTAL</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{ marginLeft: "10%" }}>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/" onClick={() => handleCategoryClick('general')}>General</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/" onClick={() => handleCategoryClick('business')}>Business</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/" onClick={() => handleCategoryClick('technology')}>Technology</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/" onClick={() => handleCategoryClick('entertainment')}>Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/" onClick={() => handleCategoryClick('health')}>Health</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/" onClick={() => handleCategoryClick('science')}>Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/" onClick={() => handleCategoryClick('sports')}>Sports</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
