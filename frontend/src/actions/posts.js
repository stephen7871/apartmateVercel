import { FETCH_ALL, CREATE, DELETE} from '../constants/actionTypes';
import axios from 'axios';
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    // const { data } = await api.fetchPosts();
    const { data } = await axios.get(
      // "http://127.0.0.1:5001/posts",
      "https://apartmate-vercel-6vc8.vercel.app/posts",
      {},
      config
    );
    console.log(JSON.stringify(data) + " data both")
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getGoldPosts = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    // const { data } = await api.fetchPosts();
    const { data } = await axios.get(
      // "http://127.0.0.1:5001/goldposts",
      "https://apartmate-vercel-6vc8.vercel.app/goldposts",
      
      {},
      config
    );
    
    dispatch({ type: FETCH_ALL, payload: data });
    
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    //console.log(JSON.stringify(post)+ "createPost JSON.stringify(post)");
    const { data } = await api.createPost(post);
    //const { data } = await baseURL.createPost(post);
    ///console.log(JSON.stringify(data)+ "createPost JSON.stringify(data)");
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    
    const { data } = await api.fetchUsers();
    

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     // const { data } = await api.updatePost(id, post);
//     await axios.patch(`/posts//${id.id}`, post);
// // //export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//     // dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };



export const deletePost = (id,route) => async (dispatch) => {
  try {
    console.log("deleting post with id " + id.id);
    console.log("deleting post with route " + route?.route);
    // await axios.delete(`${'https://univinfomation.herokuapp.com'}/${id.id}`);
    // await axios.delete(`http://127.0.0.1:5001/${route?.route}/${id.id}`);
    await axios.delete(`https://apartmate-vercel-6vc8.vercel.app/${route?.route}/${id.id}`);
    console.log("deleted post with id " + id.id);
    //dispatch({ type: DELETE, payload: id.id });
  } catch (error) {
    console.log(error.message);
  }
};

/*

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
*/


