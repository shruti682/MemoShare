import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, START_LOADING, END_LOADING, FETCH_BY_SEARCH } from '../constants/actionTypes';

import * as api from '../api/index.js';

  export const getPost = (id) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchPost(id);
      console.log("data fetched");
      dispatch({ type: FETCH_POST, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getPosts = (page) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchPosts(page);
      
      dispatch({ type: FETCH_ALL, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchPostsBySearch(searchQuery);
      console.log('data received');
      dispatch({ type: FETCH_BY_SEARCH, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createPost = (post) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
