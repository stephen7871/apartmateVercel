import React,{useEffect} from 'react';
import Card from '../ui/Card';
import { CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classes from './MeetupItem.module.css';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from '../meetups/styles.js';




  const MeetupItem = ({ post, setCurrentId, user, setUser }) => {
  const dispatch = useDispatch();
  const classstyles = useStyles();
  // const user = JSON.parse(localStorage.getItem('name'));
  
  

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <div className={classstyles.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.max}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.min}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.wanttolive}</Typography>
            </div>
          <p>{post.description}</p>
        </div>
        <div className={classes.actions}>
        <Button>Chat</Button>
        <p variant="body2">{moment(post.createdAt).fromNow()}</p>
       
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
