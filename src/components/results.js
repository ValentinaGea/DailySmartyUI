import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';
import ResultsPosts from './resultsPosts';

import { connect } from 'react-redux';
import * as action from '../actions';

class Results extends Component {
  handleSearchBarSubmit = (query) => {
    this.props.fetchPostsWithQuery(query);
  }
  render() {
    return (
      <div className='results'>
        <Logo size={55} />
        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ResultsPosts/>
      </div>
    )
  }
}
export default connect(null, action)(Results);
