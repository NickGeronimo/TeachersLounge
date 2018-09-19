import React, { Component } from "react";
import withAuthorization from './withAuthorization';
import DeleteBtn from "../style/DeleteBtn";
import Jumbotron from "../style/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../style/Grid";
import { List, ListItem } from "../style/List";
import { Input, TextArea, FormBtn } from "../style/Form";

class Posts extends Component {
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
        <Row>
          <Col size ="md-3" /> 
          <Col size="md-6">
            <div className="block">
              <h1>Submit a Project</h1>

            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.subject}
                onChange={this.handleInputChange}
                name="subject"
                placeholder="subject (required)"
              />
              <Input
                value={this.state.project}
                onChange={this.handleInputChange}
                name="project"
                placeholder="project"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description"
              />
              <FormBtn
                disabled={!(this.state.subject && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Post
              </FormBtn>
            </form>
            <br /> 
            <br />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Posts);