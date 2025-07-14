import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo';
import RecentPost from './recentPosts';
import SearchBar from './searchBar';

import { connect } from 'react-redux';

import * as actions from '../actions';

function withNavigation(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
class Home extends Component {

  handleSearchBarSubmit = (query) => {
    this.props.fetchPostsWithQuery(query);
    this.props.navigate(`/results?query=${query}`);
  }


  render() {
    return (
      <div className='home'>
        <Logo />
        <SearchBar onSubmit={this.handleSearchBarSubmit} />
        <RecentPost />
      </div>
    );
  }
}

const ConnectedHome = connect(null, actions)(Home);

export default withNavigation(ConnectedHome);
