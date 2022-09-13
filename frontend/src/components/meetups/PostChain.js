import React,{useEffect, useState} from 'react';
import Card from '../ui/Card';
import { CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classes from './MeetupItem.module.css';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from '../meetups/styles.js';
import ApartmentItem from './ApartmentItem';
import RoomateItem from './RoomateItem';
import SellingItem from './SellingItem';



  const PostChain = ({lookingfor, maxval, minval, typeval, bedroomsval, post, setCurrentId, user, setUser,proplist }) => {
  const dispatch = useDispatch();
  const classstyles = useStyles();
  const [apartmentSwitch, setApartmentSwitch] = useState(false);
  const [roomateSwitch,setRoomateSwitch ] = useState(true);
  const [collegesel,setCollegesel ] = useState(true);
  useEffect(async () => {
    setCollegesel( await JSON.parse(localStorage.getItem("meetupitemcollege")));
    console.log(JSON.stringify(proplist) +"proplist");
    console.log(JSON.stringify(lookingfor) +"lookingfor");
    console.log(JSON.stringify(typeval) +"typeval");
    console.log(JSON.stringify(bedroomsval) +"bedroomsval");
    console.log(JSON.stringify(collegesel) +"collegesel");
    // console.log(JSON.stringify(post) +"post data");
    console.log(JSON.stringify(minval) +" minval");
    console.log(JSON.stringify(maxval) +" maxval");
    // console.log(JSON.stringify(post.typeofpost) +"post.typeofpost ");
    // eslint-disable-next-line
  }, []);

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

// const [bedroomsval, setBedroomsval] = React.useState("bedrooms");
//   const [lookingfor, setLookingfor] = React.useState("Looking for");
//   const [typeofplaceval, setTypeofplaceval] = React.useState("Type");
//   const [selected, setSelected] = useState([]);
//   const [typeval, setTypeval] = useState([]);


//const PostChain = ({lookingfor, typeval, bedroomsval, post, setCurrentId, user, setUser,proplist })

 if(lookingfor[0] == null && typeval[0] == null && bedroomsval == "bedrooms" && collegesel == null){

    if (post.typeofpost == "Apartment and Roomate"){
        return(
            <ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
        );
        }
        if(post.typeofpost == "Looking for a Roomate"){
          return(
          <RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
          );
        }
        if(post.typeofpost == "Renting"){
            return(
            <SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
            );
        }

 }
 if(typeval.includes(post.typeofplace)){
    console.log("typeval.incudes(post.typeofplace");

    if (post.typeofpost == "Apartment and Roomate"){
        return(
            <ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
        );
        }
        if(post.typeofpost == "Looking for a Roomate"){
          return(
          <RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
          );
        }
        if(post.typeofpost == "Renting"){
            return(
            <SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
            );
        }
 }

 if(lookingfor.includes(post.typeofpost)){
    console.log("typeval.incudes(post.typeofplace");
    if (post.typeofpost == "Apartment and Roomate"){
        return(
            <ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
        );
        }
        if(post.typeofpost == "Looking for a Roomate"){
          return(
          <RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
          );
        }
        if(post.typeofpost == "Renting"){
            return(
            <SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
            );
        }
 }


 if(parseInt(bedroomsval) <= parseInt(post?.nbedrooms)){
    console.log("typeval.incudes(post.typeofplace");
    if (post.typeofpost == "Apartment and Roomate"){
        return(
            <ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
        );
        }
        if(post.typeofpost == "Looking for a Roomate"){
          return(
          <RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
          );
        }
        if(post.typeofpost == "Renting"){
            return(
            <SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
            );
        }
 }

 if(parseInt(maxval) >= parseInt(post?.pricepermonth)){
    if (post.typeofpost == "Apartment and Roomate"){
        return(
            <ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
        );
        }
        if(post.typeofpost == "Looking for a Roomate"){
          return(
          <RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
          );
        }
        if(post.typeofpost == "Renting"){
            return(
            <SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
            );
        }
 }




  

  
  // const user = JSON.parse(localStorage.getItem('name'));
  


  return (
    <div>here</div>
  );
}

export default PostChain;