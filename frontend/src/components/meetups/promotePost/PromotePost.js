import React,{useEffect, useState} from 'react';
import { CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classes from './MeetupItem.module.css';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from '../styles.js'
import ApartmentItem from '../ApartmentItem';
import RoomateItem from '../RoomateItem'
import SellingItem from '../SellingItem'
import MyPost from '../MyPost';




const PromotePost = ({ post, setCurrentId, user, setUser,proplist, typeofpost }) => {
  const dispatch = useDispatch();
  const classstyles = useStyles();
  const [switchPage, setSwitchPage] =React.useState(false)
  

  const navigateToPromote  = () => {
    
    
    setSwitchPage(true);
  
    // 👇️ navigate to /contacts
    
  };



        let returnPost;
    
        if (typeofpost ==  "Apartment and Roomate") {
            returnPost =<ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>;
          }
          if (typeofpost ==  "Looking for a Roomate") {
            returnPost =<RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>;
          } 
          if (typeofpost == "Renting") {
            returnPost =<SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>;
          }

          return(
            <>
            <div>
                  {returnPost}
                  </div>
                  <Button>
                  promote post to Gold $10 month
                  </Button>
                  <Button>
                  promote post to Silver $8 month
                  </Button>
                  <Button>
                  promote post to Bronze $6 month
                  </Button>
            </>
            
          )

    
    }
    

export default PromotePost;