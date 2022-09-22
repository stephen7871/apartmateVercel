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



  const PostChain = ({collegesel, firstAddress, address, pclist, setPcist, list, counter, lookingfor, maxval, minval, typeval, bedroomsval, post, setCurrentId, user, setUser,proplist }) => {
  const dispatch = useDispatch();
  const classstyles = useStyles();

 

  //const [pclist, setPcist] =  React.useState({looking: '',typeval: '', bedrooms: ''});
  const [name, setName] = React.useState('');
  const [apartmentSwitch, setApartmentSwitch] = useState(false);
  const [roomateSwitch,setRoomateSwitch ] = useState(true);
  const [looking, setLooking] = useState(false);
  const [place, setPlace] = useState(false);
  const [bedrooms, setBedrooms] = useState(false);
  const [price, setPrice] = useState(false);
  const [returnpost, setReturnpost] = useState(false);
 
//   const [collegesel,setCollegesel ] = useState(true);

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



if(maxval == ""){
    maxval = "0";

}
if(minval == ""){
    minval = "0";
}
if((maxval == "0" && minval == "0") || (maxval == "0" && minval > 0)){

}
// const looking = lookingfor.includes(post.typeofpost);
// const place = typeval.includes(post.typeofplace);
// const bedrooms = parseInt(bedroomsval) <= parseInt(post?.nbedrooms);
// const price = (parseInt(maxval) >= parseInt(post?.pricepermonth)) && (parseInt(maxval) >= parseInt(post?.pricepermonth));
// const college = collegesel == post?.college;




//  if(lookingfor[0] == null && typeval[0] == null && bedroomsval == "bedrooms" && collegesel == "" && maxval == "0" && minval == "0"){

//     if (post.typeofpost == "Apartment and Roomate"){
//         return(
//             <ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//         );
//         }
//         if(post.typeofpost == "Looking for a Roomate"){
//           return(
//           <RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//           );
//         }
//         if(post.typeofpost == "Renting"){
//             return(
//             <SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//             );
//         }

//  }







// useEffect(() => {
  // console.log("here");
  // console.log(JSON.stringify(pclist.looking)  + " pclist.looking");
  // console.log(JSON.stringify(list.looking)+ " list.looking");
  // if(pclist.looking != list.looking){
  //   console.log(JSON.stringify(pclist.looking)  + " pclist.looking");
  //   console.log(JSON.stringify(list.looking)+ " list.looking");
  //   console.log("made false at plist.looking != list.looking")
  //   //setReturnpost(false); 
  // }
// }, [pclist]);

// useEffect(() => {
//     setPcist({looking: '',typeval: '', bedrooms: ''});
//     console.log(JSON.stringify(pclist) +"true")

//     if(typeval.includes(post.typeofplace)){
//       console.log("typeval.includes(post.typeofplace)");
//       setPcist({...pclist, typeval: 'typeval'});
//       console.log(JSON.stringify(pclist) + " list added typeval postchain");
//     }
//     console.log( post.typeofpost + " apartmentpost.typeofpost");
//     console.log(lookingfor + " lookingfor");
//     if(lookingfor.includes(post.typeofpost)){
//       setPcist({...pclist, looking: 'selected'});
//        console.log(JSON.stringify(pclist) + " list added selected for postchain");
//     }
//     if(parseInt(bedroomsval) <= parseInt(post?.nbedrooms)){
//       setPcist({...pclist, bedrooms: 'bedroomsval'});
//        console.log(JSON.stringify(pclist) + " list added bedroomsval for postchain");
  
//     }
//   // console.log("postchain");  
//  }, [list]);


//  console.log(list); 
//  console.log(pclist.looking + "pclist.looking"); 
//  console.log(pclist.typeval + "pclist.typeval"); 
//  console.log("postchain");
//  if((list.bedrooms == pclist.bedrooms) && (list.looking == pclist.looking) && (list.typeval == pclist.typeval)){   
// console.log(minval+ " minval postchain");
if(

(
  (parseInt(bedroomsval) <= parseInt(post?.nbedrooms))
  ||
  (bedroomsval == "bedrooms")
)
&&
(
  (typeval.includes(post?.typeofplace))
  ||
  (typeval[0] == null)
)
&&
(
  (lookingfor.includes(post?.typeofpost))
  ||
  (lookingfor[0] == null)
)

&&

(
  (post.address?.includes(address))
  ||
  (address == '' || address == null)
)

&&

(
  ((parseInt(maxval) >= parseInt(post?.pricepermonth)) && (parseInt(minval) <= parseInt(post?.pricepermonth)))
  ||
  //((maxval == "0" && minval == "0") || (maxval == "0" || minval == "0"))
  (maxval == "0" && minval == "0") || (maxval == "0" && parseInt(minval) <= parseInt(post?.pricepermonth))
)


  )
  
  
  {
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
return(
<div> here </div>
);
// useEffect(() => {
  // if(pclist.typeval != list.typeval){
  //   console.log("made false at pclist.typeval != list.typeval")
  //   setReturnpost(false); 
  // }
// }, [pclist.typeval]);


// if(returnpost == true){
//   if (post.typeofpost == "Apartment and Roomate"){
//             return(
//                 <ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//             );
//             }
//             if(post.typeofpost == "Looking for a Roomate"){
//               return(
//               <RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//               );
//             }
//             if(post.typeofpost == "Renting"){
//                 return(
//                 <SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//                 );
//             }

//  }

//  if((parseInt(maxval) >= parseInt(post?.pricepermonth)) && (parseInt(maxval) >= parseInt(post?.pricepermonth)))
 
//  {
//     if (post.typeofpost == "Apartment and Roomate"){
//         return(
//             <ApartmentItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//         );
//         }
//         if(post.typeofpost == "Looking for a Roomate"){
//           return(
//           <RoomateItem post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//           );
//         }
//         if(post.typeofpost == "Renting"){
//             return(
//             <SellingItem  post={post} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
//             );
//         }
//  }
  
}

export default PostChain;