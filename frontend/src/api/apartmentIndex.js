import axios from 'axios';

const baseURL = axios.create({ baseURL: 'https://apartmatesearch.herokuapp.com' });
// const url = 'https://apartmatesearch.herokuapp.com'
const url = 'https://apartmate-vercel-6vc8.vercel.app'
// const API = axios.create({ baseURL: 'https://apartmatesearch.herokuapp.com' });
// const API = axios.create({ baseURL: 'http://127.0.0.1:5001' })
const API = axios.create({ baseURL: 'https://apartmate-vercel-6vc8.vercel.app/' })
// const url = 'https://apartmatesearch.herokuapp.com';
API.interceptors.request.use((req) => {
    if (localStorage.getItem('form')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('form')).token}`;
    }
    return req;
});

export const fetchPosts = () => API.get('/apartmentposts');

export const createPost = (newPost) => API.post('/apartmentposts', newPost);
//export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
//export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//export const deletePost = (id) => axios.delete(`https://apartmatesearch.herokuapp.com/${id}`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchUsers = () => API.get('/user');