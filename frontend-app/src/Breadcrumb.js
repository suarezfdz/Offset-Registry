// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ path }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {path.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === path.length - 1 ? 'active' : ''}`}>
            {index === path.length - 1 ? (
              item
            ) : (
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
