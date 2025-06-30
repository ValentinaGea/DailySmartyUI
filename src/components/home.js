import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPost from './recentPosts';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPost />
      </div>
    );
  }
}
