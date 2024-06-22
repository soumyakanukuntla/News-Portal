import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './Component/Navbar'
import NewsBoard from './Component/NewsBorad';
import './App.css'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsBoard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
