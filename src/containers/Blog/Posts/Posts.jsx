import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import Post from "../../../components/Post/Post";
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
        posts: [],
    };
  }

  onPostClicked = postId => {
    this.setState({ postId: postId });

    // Navigating Programatically
    this.props.history.push({pathname: '/posts/' + postId});
  };

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Link key={post.id} to={'/posts/' + post.id}>
            <Post
                title={post.title}
                author={post.author}
                clicked={this.onPostClicked.bind(this, post.id)}
            />
        </Link>

        // Navigating Programatically
        // <Post key={post.id}
        //     title={post.title}
        //     author={post.author}
        //     clicked={this.onPostClicked.bind(this, post.id)}
        // />
      );
    });

    return <section className="Posts">{posts}</section>;
  }

  componentDidMount() {
    axios.get("/posts").then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Max"
        };
      });
      this.setState({ posts: updatedPosts });
    }).catch((error) => console.log(error))
  }
}

export default Posts;