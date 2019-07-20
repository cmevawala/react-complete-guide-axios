import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import "./Blog.css";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              {/* <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?s=true'
              }}>New Post</Link></li> */}
              <li><NavLink to="/" exact>Home</NavLink></li> { /* You can also use activeClassName/activeStyle to decorate active link  */ }
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/' render={() => <h1>Home 2</h1>} /> */}

        <Route path='/' exact component={Posts} />
        <Route path='/new-post' component={NewPost} />
        <Route path='/posts/:id' component={FullPost} />
        
        {/* <section>
          <FullPost postId={this.state.postId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
