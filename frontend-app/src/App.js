// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './List';
import Details from './Details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/details/:itemId" element={<Details />} />
        <Route path="/home" element={<ListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
