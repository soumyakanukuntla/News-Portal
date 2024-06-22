import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryDrop from './CategoryDrop';
import { fetchArticles } from '../NewSlice'; 
import NewsItem from './NewsItem';
import { setCategory } from '../categoryslice';
import './NewsBoard.css';

const NewsBoard = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const { articles, loading, error, totalResults } = useSelector((state) => state.news);

  const [currentPage, setCurrentPage] = useState(1);
  const [colClass, setColClass] = useState('col-lg-4 col-md-6 col-sm-12');
  const [cardSpacingClass, setCardSpacingClass] = useState('mb-4');

  const totalPages = Math.ceil(totalResults / 10);

  useEffect(() => {
    dispatch(fetchArticles({ category, page: currentPage }));
  }, [dispatch, category, currentPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setColClass('col-lg-4 col-md-6 col-sm-12');
        setCardSpacingClass('mb-4');
      } else if (window.innerWidth >= 798) {
        setColClass('col-md-6 col-sm-12');
        setCardSpacingClass('mb-4');
      } else if (window.innerWidth >= 576) {
        setColClass('col-md-6 col-sm-12');
        setCardSpacingClass('mb-4');
      } else {
        setColClass('col-12');
        setCardSpacingClass('mb-3');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the correct classes

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setCurrentPage(1); 
    dispatch(setCategory(selectedCategory)); 
  };

  return (
    <div className="news-container">
      <h2 className="text-center mt-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="news-content">
        <div className="row">
          <div className="col-lg-3 col-md-4 mb-4">
            <CategoryDrop onCategoryChange={handleCategoryChange} />
          </div>
          <div className="col-lg-9 col-md-8">
            {loading ? (
              <div className="d-flex justify-content-center"  style={{marginTop:"15%"}}>
                <div className="spinner-border text-light" role="status" style={{width:"80px" , height:"80px"}}>
                  <span className="sr-only fs-2">Loading...</span>
                </div>
              </div>
            ) : error ? (
              <div className='text-center text-light fw-bold fs-2' style={{marginTop:"15%"}}>Error: {error}</div>
            ) : articles.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {articles.map((news, index) => (
                  <div key={index} className={`${colClass} ${cardSpacingClass}`}>
                    <NewsItem
                      id={news.id}
                      title={news.title}
                      description={news.description}
                      src={news.urlToImage}
                      url={news.url}
                      className="news-card"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-light fw-bold"  style={{marginTop:"15%"}}>No news available</p>
            )}
          </div>
        </div>
      </div>
      <div className="pagination-controls d-flex justify-content-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="btn btn-danger me-2 fw-bold"
          style={{ width: '200px' }}
        >
          Previous
        </button>
        <span className="text-light fw-bold p-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn btn-danger ms-2 fw-bold"
          style={{ width: '200px' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsBoard;
