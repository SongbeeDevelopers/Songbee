import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';

import './Header.css';

function Header() {

  const user = useSelector((store) => store.user);

  return (
    <div className="nav">

      <Link to="/home">
        <img className="nav-title" src='header-icon.png'></img>
      </Link>

      <div>
        {/* if there is no user, show login link */}
        {!user.id && (
          <Link className="navLink" to="/login">
            Login
          </Link>
        )}

        {user.id && user.admin && (
          <>
            <Link className="navLink" to="/admin">
              Admin
            </Link>
            <div className='navSpacer'></div>
            <LogOutButton className="navLink" />
          </>
          )}
          
          {user.id && !user.admin && (
          <>
            <Link className="navLink" to="/user">
              Account
            </Link>
            <div className='navSpacer'></div>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>

    </div>
  );
}

export default Header;
