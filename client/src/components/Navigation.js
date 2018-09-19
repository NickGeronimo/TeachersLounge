import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';

const Navigation = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
        </AuthUserContext.Consumer>


const NavigationAuth = () =>      
    <ul className="BBorder">
      <li><Link to={routes.SIGN_OUT}>Sign Out</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><Link to={routes.POSTS}>Upload</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
    </ul>
const NavigationNonAuth = () =>
<ul className="BBorder">
<li><Link to={routes.SIGN_UP}>Register</Link></li>
  <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
</ul>

export default Navigation;