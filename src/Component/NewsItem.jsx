import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/news.jpeg';
import './Newsitems.css' 

const NewsItem = ({ id, title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 news-card-container">
      <img
        src={src ? src : image}
        className="card-img-top news-card-image"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : 'News is a report of a current event, it is information about something that has just happened'}
        </p>
        <Link to={url} className="btn btn-danger">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
