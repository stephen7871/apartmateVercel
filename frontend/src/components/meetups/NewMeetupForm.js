import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import Scrolebar from './Scrolebar';

//import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';

import { createPost } from '../../actions/posts';

const NewMeetupForm = ({ currentId, setCurrentId, user, setUser }) => {
  
  const [postData, setPostData] = useState({title: '', selectedFile: '', tags: '', description: '', username: '', max: '', min: '', wanttolive: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId) : null));
  const dispatch = useDispatch();
  const classstyle = useStyles();
  

  ///add belllow functions
  function getStorageValue(key, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  }
  
    const useLocalStorage = (key, defaultValue) => {
      const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
      });
    
      useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
    
      return [value, setValue];
    };
///added above functions


//bellow is original

//const user = JSON.parse(localStorage.getItem('name'));
// const stringifiedPerson = localStorage.getItem("name");
// const personAsObjectAgain = JSON.parse(stringifiedPerson);
//bellow is new
//console.log(personAsObjectAgain.email + "this is user value")
  
useEffect(() => {
  console.log(user+" user");
}, []);


  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({title: '', selectedFile: '', tags: '', description: '', username: '', max: '', min: '', wanttolive: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...postData, username: user, max: postData.max}));
      console.log(postData);
      clear();
    } else {
      
      clear();
    }
  };
  

  if (!user) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='tags'>tags</label>
          <TextField name="tags" variant="outlined"  fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        </div>

        <div className={classes.control}>
          <label htmlFor='min' >min price range</label>
          <TextField name="min" variant="outlined"  fullWidth value={postData.min} onChange={(e) => setPostData({ ...postData, min: e.target.value})} />
        </div>
        {/* <div>
          <Scrolebar/>
        </div> */}
        <div className={classes.control}>
          <label htmlFor='max'>max price range</label>
          <TextField name="max" variant="outlined"  fullWidth value={postData.max} onChange={(e) => setPostData({ ...postData, max: e.target.value})} />
        </div>
        <div className={classes.control}>
          <label htmlFor='wanttolive'>where are you looking to move</label>
          <TextField name="wanttolive" variant="outlined"  fullWidth value={postData.wanttolive} onChange={(e) => setPostData({ ...postData, wanttolive: e.target.value})} />
        </div>

        <div className={classes.control}>
          <label htmlFor='description'>any other things to add</label>
          <textarea id='description' required rows='5' value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Post</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
