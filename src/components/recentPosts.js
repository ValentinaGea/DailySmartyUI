import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Post from './post';

class RecentPost extends Component {
  componentDidMount() {
    console.log("Props en RecentPost:", this.props);
    this.props.fetchRecentPosts();
  }

  renderPosts = () => {
    const { recentPosts } = this.props;

    if (!recentPosts || recentPosts.length === 0) {
      return <li>No recent posts</li>;
    }

    return recentPosts.slice(0, 3).map((post, index) => (
      <Post {...post} key={index} type="recent" />
    ));
  };

  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts__wrapper">
          <div className="recent-posts__heading">Recent Posts</div>
          <ul className="recent-posts__posts">
            {this.renderPosts()}
          </ul>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recentPosts: state.posts.recentPosts
  };
}

export default connect(mapStateToProps, actions)(RecentPost);