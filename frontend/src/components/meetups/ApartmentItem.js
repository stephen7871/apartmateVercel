import React,{useEffect, useState} from 'react';
import Card from '../ui/Card';
import { CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classes from './MeetupItem.module.css';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from '../meetups/styles.js';




const ApartmentItem = ({ post, setCurrentId, user, setUser,proplist }) => {
  const dispatch = useDispatch();
  const classstyles = useStyles();
  

//   address: String,
//     nbedrooms: String,
//     typeofplace: String,
//     pricepermonth: String,
//     nroomates: String,
//     collegename: String,
//     photos: String,
//     description: String,
//     createdAt: {
//         type: Date,
//         default: new Date(),
//     },
//     id: String,
//     typeofpost: String,
//     username: String,
//     max: String,
//     min: String,
//     wanttolive: String,

  



    return(
      <li className={classes.item}>
      <Card>
      <CardMedia className={classes.media} image={post.photo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.photo} />
        <div className={classes.content}>
          <h3>{post.address}</h3>
          <div className={classstyles.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.nbedrooms}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.typeofplace}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.pricepermonth}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.nroomates}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.collegename}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.username}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{post.typeofpost}</Typography>
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
    

export default ApartmentItem;