import React, { Component } from 'react';
import withAuthorization from './withAuthorization';
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../style/Grid";
import { List, ListItem } from "../style/List";

class HomePage extends Component {
  state = {
    posts: [],
    title: "",
    subject: "",
    project: "",
    description: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: "", subject: "", project: "", description:"" })
      )
      .catch(err => console.log(err));
  };

  deletePost = id => {
    API.deletePost(id)
      .then(res => this.loadPosts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.subject) {
      API.savePost({
        title: this.state.title,
        subject: this.state.subject,
        project: this.state.project,
        description: this.state.description
      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
      <br />
        <Row>
        <Col size="md-3 sm-12">
        </Col>
          <Col size="md-6 sm-12" >
          <div className="block">
            <h3> Recent Projects </h3>
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.title} <br /> Subject: {post.subject}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ):<h3></h3>}  
          
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);