import React,{useState,useEffect} from 'react';
import CustomMeetupItem from './CustomMeetupItem';
import classes from './MeetupList.module.css';
import { Paper,Typography } from '@material-ui/core';
import MeetupList from './MeetupList';
import NewMeetupForm from './NewMeetupForm';
import MeetupItem from './MeetupItem'
import PersonalPost from './PersonalPost';
import Alert from '@material-ui/lab/Alert';

import { useSelector } from 'react-redux';



  const MyPost = ({ currentId,setCurrentId, user, setUser }) => {
  const posts = useSelector((state) => state.posts);
  const [counter, setCounter]= React.useState(false);
  const [postList, setPostList] = useState([]);
  const [hasError, setError] = React.useState(false);


  

  useEffect(() => {
    {posts.map((post) => {
      console.log(JSON.stringify(post) + " JSON.stringify(post)");
        if(post.username === user){
            setPostList(current => [...current, post]);
            setCounter(true);
    }
    else{
        return <div></div>;
    }
})}
  }, []);

  
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
    
<>
    { counter ? (
        <ul className={classes.list}>
        {postList.map((post) => (
          <PersonalPost
            post={post} 
            setCurrentId={setCurrentId}
          />
        ))}
      </ul>
        )
    :
    (
        <Alert severity="info">You have no Posts yet.  Add your own posts by going to the "Add Posts" page</Alert>
    )}
</>
  );
}


export default MyPost;
