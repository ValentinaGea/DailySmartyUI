import {
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from '../actions/types';

const INIT_STATE = {
    resultsPosts: [],
    recentPosts: []
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_RECENT_POSTS:
      return {
        ...state,
        recentPosts: action.payload
      };
    default:
      return state;
  }
}