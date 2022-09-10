import React,{useState,useEffect} from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import Alert from '@material-ui/lab/Alert';
import { Paper,Typography,TextField } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import { useSelector } from 'react-redux';
import List from './List';


  const MeetupList = ({ setCurrentId, user }) => {
    const posts = useSelector((state) => state.posts);
    const [counter, setCounter]= useState(0);
    const [postList, setPostList] = useState([]);
  const [inputText, setInputText] = useState("");


  
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
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
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search by title"
        />
      </div>
      <List input={inputText} setCurrentId={setCurrentId}/>
      {/* <>
      { counter ? (
          <ul className={classes.list}>
          {postList.map((post) => (
            <MeetupItem
              post={post} 
              setCurrentId={setCurrentId}
            />
          ))}
        </ul>
          )
      :
      (
          <Alert severity="info">You have no post yet.  Add your own posts by going to the "Add Post" page</Alert>
      )}
      
  </> */}
    </div>
  );
}

export default MeetupList;
