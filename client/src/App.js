import React from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
////////////////////////////////////////////////
import AccountPage from './components/Account';
import Detail from './components/Detail';
import Posts from './components/Posts';
import HomePage from './components/Home';
import LandingPage from './components/Landing';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatch';
import PasswordForgetPage from './components/PasswordForget';
import SignInPage from './components/SignIn';
import SignOutPage from './components/SignOut';
import SignUpPage from './components/SignUp';
///////////////////////////////////////
import * as routes from './constants/routes';
import withAuthentication from './components/withAuthentication';

const App = () =>

  <Router>
    <div className="App">
    
    <div className="App-title"> The Teacher's Lounge </div>
      <Navigation />
     <br />
      <Switch>
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.SIGN_OUT} component={() => <SignOutPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.POSTS} component={()  => <Posts />} />
      <Route exact path={routes.DETAIL} component={Detail} />

      <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>

export default withAuthentication(App);