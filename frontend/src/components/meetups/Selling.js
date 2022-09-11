import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { TextField, Typography, Paper,Button, Grid  } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from './styles';
import Scrolebar from './Scrolebar';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createPost } from '../../actions/posts';



const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyler = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

const Selling = ({ currentId, setCurrentId, user, setUser}) => {
    const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId) : null));

    const [postData, setPostData] = useState({title: '', selectedFile: '', tags: '', description: '', username: '', max: '', min: '', wanttolive: ''});
  
    const [switched, setSwitched] = useState(false);
    const [isShowap, setIsShownap] = useState(true);
    const [isShowro, setIsShownro] = useState(false);
    const [isShowroap, setIsShownroap] = useState(false);
    const [selectval, setSelectval] = React.useState('');
  
    useEffect(() => {
      console.log(user+" user");
    }, []);
    
    
      useEffect(() => {
        if (post) setPostData(post);
      }, [post]);
  
  
    const dispatch = useDispatch();
    const classstyle = useStyles();
    const classesslide = useStyler();
    const classselect = useStyles();
  
  
    const clear = () => {
      setCurrentId(0);
      setPostData({title: '', selectedFile: '', tags: '', description: '', username: '', max: '', min: '', wanttolive: ''});
    };
  
    const handleselectChange = (event) => {
        setSelectval(event.target.value);
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (currentId === 0) {
        dispatch(createPost({ ...postData, username: user, max: postData.max}));
        //console.log(postData);
        clear();
      } else {
        
        clear();
      }
    };
  

    return(

        <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='title'>address</label>
          <input type='text' required id='title' value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='tags'>number of bedrooms</label>
          <TextField name="tags" variant="outlined"  fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        </div>
      
        <div className={classes.control}>
          <label htmlFor='min' >house or apartment</label>
          <div>
            <FormControl className={classes.margin}>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={selectval}
                onChange={handleselectChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>House</MenuItem>
                <MenuItem value={20}>Appartment</MenuItem>
                <MenuItem value={30}>Condo</MenuItem>
              </Select>
            </FormControl>
          
          </div>
        </div>
        {/* <div>
          <Scrolebar/>
        </div> */}
        <div className={classes.control}>
          <label htmlFor='max'>price per month</label>
          <TextField name="wanttolive" variant="outlined"  fullWidth value={postData.wanttolive} onChange={(e) => setPostData({ ...postData, wanttolive: e.target.value})} />
          {/* <TextField name="max" variant="outlined"  fullWidth value={postData.max} onChange={(e) => setPostData({ ...postData, max: e.target.value})} /> */}
        </div>
       
        <div className={classes.control}>
          <label htmlFor='wanttolive'>Tag a college</label>
          <TextField name="wanttolive" variant="outlined"  fullWidth value={postData.wanttolive} onChange={(e) => setPostData({ ...postData, wanttolive: e.target.value})} />
        </div>
        <div className={classes.control}>
          <label htmlFor='wanttolive'>add photos</label>
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
    );
}
export default Selling;