// Layout.js
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const Layout = ({children, path}) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setAuthenticated(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername('');
  };

  return (
<div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <div className="p-3 flex-grow-1" style={{ backgroundColor: '#163026' }} >
            <Breadcrumb path={path} />
            {children}
        </div>
        <div className="p-3" style={{ background: '#163026', color: 'white' }}>
            Source: Ivy S. So, Barbara K. Haya, Micah Elias. (2023, December). Voluntary Registry Offsets Database, Berkeley Carbon Trading Project, University of California, Berkeley
        </div>
    </div>
  );
};

export default Layout;
