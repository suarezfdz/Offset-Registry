// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ path }) => {
  return (
    <nav aria-label="breadcrumb" style={{color:'white'}}>
      <ol className="breadcrumb" >
        {path.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === path.length - 1 ? 'active' : ''}`} style={{ color: '#d5e2ed' }}>
            {index === path.length - 1 ? (
              item === 'Home' ? 'Offset Projects' : item
            ) : (
              <Link to={`/${item.toLowerCase()}`}>{item === 'Home' ? 'Offset Projects' : item}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
