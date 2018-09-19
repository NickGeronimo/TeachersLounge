import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import { Col, Row, Container } from "../style/Grid";


const AccountPage = () =>
<Container fluid>
<Row>
 <Col size="md-3" /> 
<Col size="md-6">
  <AuthUserContext.Consumer>
    {authUser =>
      <div className="block">
        <h1>Account: {authUser.email}</h1>
        <br />
        <PasswordForgetForm />
        <br />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>
  </Col>
  </Row>
  </Container>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);