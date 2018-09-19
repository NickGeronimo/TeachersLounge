import React, { Component } from 'react';
import { Col, Row, Container } from "../style/Grid";



class Landing extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users:null,
    };
  }

  render() {
    return(
      <Container fluid>
      <Row>
       <Col size="md-3" /> 
      <Col size="md-6">
      <div className="block">
      <br/>
      <h1>Hello! 
        <br/>Welcome to the 
        <br/>Teacher's Lounge</h1>
      <br />
      <h3> A site designed to help teachers <br /> share ideas with one another. <br />
       </h3>
      </div>
    </Col>
    </Row>
    </Container>
    );
  }
}

export default Landing;