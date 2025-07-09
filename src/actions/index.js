import {
  SET_RECENT_POSTS,
  SET_RESULTS_POSTS
} from './types';
import axios from 'axios';

export function fetchRecentPosts() {
  return function (dispatch) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const postsWithTopics = response.data.map(post => ({
          ...post,
          associated_topics: ['javascript', 'react', 'redux']
        }));
        dispatch({
          type: SET_RESULTS_POSTS,
          payload: postsWithTopics
        });
      })
      .catch(error => {
        console.error("Error fetching recent posts:", error);
      });
  };
}

export function fetchPostsWithQuery(query) {
  return function (dispatch) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const postsWithTopics = response.data.map(post => ({
          ...post,
          associated_topics: ['javascript', 'react', 'redux']
        }));
        dispatch({
          type: SET_RECENT_POSTS,
          payload: postsWithTopics
        });
      })
      .catch(error => {
        console.error("Error fetching posts with query:", error);
      });
  };
}

