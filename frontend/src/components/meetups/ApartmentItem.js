import React,{useEffect, useState} from 'react';
import Card from '../ui/Card';
import { CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classes from './MeetupItem.module.css';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from './styles.js';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';



const ApartmentItem = ({ post, setCurrentId, user, setUser,proplist }) => {
  const dispatch = useDispatch();
  const classstyles = useStyles();
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const addIndex = () =>{
    console.log(photoIndex);
    if(photoIndex > 0){
      setPhotoIndex(0);
    }else{
      setPhotoIndex(photoIndex + 1);
    }
  }
  
  const removeIndex = () =>{
    console.log(photoIndex);
    if(photoIndex == 0){
      setPhotoIndex(post.photos.length - 1);
    }
      if(photoIndex != 0){
      setPhotoIndex(photoIndex - 1);
    }
  }

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
      <div>
      
<Card>
        <Button>
        <div id="container" style={{position: "relative"}}>
          <div style={{ width:"55%", left:"0"}}>
        <img  src={post.photos[photoIndex]}  alt="BigCo Inc. logo"></img>
        </div>
        <div id="div1" style={{position: "absolute", top:'50%', right: '85%'}}>
        <Button onClick={removeIndex}style={{width:'30%'}}>
        
        <ArrowBackIosNewIcon style={{width:'40%'}}/>
        </Button>
        </div>
        <div id="div1" style={{position: "absolute", top:'50%', left: '85%'}}>
        <Button onClick={addIndex} style={{width:'30%'}}>
        
        <ArrowForwardIosIcon style={{width:'40%'}}/>
        </Button>
        </div>
        </div>
        <Typography variant="body2" color="textSecondary" component="h2">{post.typeofplace}</Typography>
        <p>{post.description}</p>
        <h3>(860)-988-5657</h3>
         
        </Button>
        </Card>
      </div>
      
     
    //   <li className={classes.item}>
    //   <Card>
    //     <div className={classes.content}>
    //       <h3>addres: {post.address}</h3>
    //       <div className={classstyles.details}>
    //     <Typography variant="body2" color="textSecondary" component="h2">number of bedrooms: {post.nbedrooms}</Typography>
    //     <div className={classes.center}>
    //     <img  src={post.photos[0]}  height={'200px'} width={'300px'} alt="BigCo Inc. logo"/>
    //     </div>
    //     <Typography variant="body2" color="textSecondary" component="h2">type of place: {post.typeofplace}</Typography>
      
    //     <Typography variant="body2" color="textSecondary" component="h2">price per month:{post.pricepermonth}</Typography>
        
    //     <Typography variant="body2" color="textSecondary" component="h2">number of roomates: {post.nroomates}</Typography>
        
    //     <Typography variant="body2" color="textSecondary" component="h2">college name: {post.collegename}</Typography>
    
    //     <Typography variant="body2" color="textSecondary" component="h2">username:{post.username}</Typography>

    //     <Typography variant="body2" color="textSecondary" component="h2">type of post:{post.typeofpost}</Typography>
    //         </div>
    //       <p>{post.description}</p>
    //     </div>
    //     <div className={classes.actions}>
    //     <Button>Chat</Button>
    //     <p variant="body2">{moment(post.createdAt).fromNow()}</p>
       
    //     </div>
    //   </Card>
    // </li>
 

    );
    }
    

export default ApartmentItem;