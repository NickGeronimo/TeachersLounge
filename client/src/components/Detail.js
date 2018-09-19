import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../style/Grid";
import API from "../utils/API";

class Detail extends Component {
  state = {
    post: {}
  };
  // When this component mounts, grab the post with the _id of this.props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          
          <Col size="md-3" />
          <Col size="md-6">
          <div className="block">
              <br />
              <h1>
                Title: {this.state.post.title}
              </h1> 
              <br /> 
              <h2>  
                Subject: {this.state.post.subject}
              </h2>

            <article>
              <h1>Details</h1>
              <p>
                {this.state.post.project}
              </p>
              <p>
              {this.state.post.description}  
              </p>
            </article>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}



export default Detail;
