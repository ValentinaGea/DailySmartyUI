import React, { Component } from 'react';

class Post extends Component {
  renderTopics() {
    console.log("Post props:", this.props); // 👈 AÑADE ESTO
    const topics = this.props.associated_topics?.map((topic, index) => (
      <span className="post-topic" key={index}>{topic}</span>
    ));
    return topics || null;
  }

  render() {
    return (
      <li className='recent-post'>
        <div className='recent-post__title'>
          {this.props.title}
        </div>
        <div className='recent-post__topics'>
          {this.renderTopics()}
        </div>
      </li>
    );
  }
}

export default Post;
