import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import NewMeetupForm from '../meetups/NewMeetupForm.js';
import MeetupList from '../meetups/MeetupList.js';
//import AllMeetupsPage from '../../pages/AllMeetups';
//import Layout from '../layout/NewLayout';
import Navbar from '../Navbar/Navbar';
//import Auth from '../Auth/Auth.js';
//import { getUsers } from '../../actions/posts';
import MyPost from '../meetups/MyPost';
//import Chat from '../../pages/Chat';
import Chatpage from '../../Pages/Chatpage';

//import SetAvatar from '../SetAvatar';



const Home = (props ) => {
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("name")));

  const [username, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(localStorage.getItem("userInfo")
      )
    );
  }, []);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
  //  useEffect(() => {
  //   dispatch(getUsers());
  // }, [currentId, dispatch]);

  useEffect(async() => {
      dispatch(getPosts());
  }, [currentId, dispatch]);
  
  

  return (
    
    
    
    
<div>
            <Navbar user={username} setUser={setUserName} />
            <Routes>
             <Route path="Blog" element={<MeetupList currentId={props.currentId} setCurrentId={props.setCurrentId} user={username} setUser={setUserName}/>}/> 
            
            <Route path="CreatePost" element={<NewMeetupForm currentId={props.currentId} setCurrentId={props.setCurrentId} user={username} setUser={setUserName}/>}/>
           
            <Route path="MyPost" element={<MyPost currentId={props.currentId} setCurrentId={props.setCurrentId} user={username} setUser={setUserName}/>}/> 
            {/* <Route path="SetAvatar" element={<SetAvatar/>}/> */}
            <Route path= "chats" element={<Chatpage />} /> 
            </Routes>
            </div>           
             
      
      
        
      
  );
};

export default Home;
