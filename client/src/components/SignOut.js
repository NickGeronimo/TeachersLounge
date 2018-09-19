import React from 'react';
import { auth } from '../firebase';
import withAuthorization from './withAuthorization';

const SignOutPage = () =>
  <div>
    <h1>Do You Wish To Sign Out?</h1>
    <button     onClick={auth.doSignOut}>Sign Out</button>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(SignOutPage);