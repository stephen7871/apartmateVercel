// import express from 'express';
//const express = require('express');

//import { getPosts, getPost, createPost, getUsers,deletePost} from '../controllers/posts.js';
const {getPosts, getPost, createPost, deletePost, createApartmentPost} = require('../controllers/posts.js')


const router = require("express").Router();

router.get('/', getPosts);
// router.get('/', getUsers);
router.post('/', createPost);

router.get('/:id', getPost);
//router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
//router.patch('/:id/likePost', likePost);

//export default router;
module.exports = router;