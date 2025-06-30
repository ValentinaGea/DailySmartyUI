import { SET_RECENT_POSTS } from './types';

import axios from "axios";

export const FETCH_RECENT_POSTS = 'FETCH_RECENT_POSTS';

export function fetchRecentPosts() {
  return function (dispatch) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch({
          type: FETCH_RECENT_POSTS,
          payload: response.data.posts
        });
      })
      .catch(error => {
        console.error("Error fetching recent posts:", error);
      });
  };
}