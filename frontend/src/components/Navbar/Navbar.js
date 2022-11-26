import React, { useState, useEffect } from 'react';

import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

import classes from './MainNavigation.module.css'

import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = (props ) => {
  const navigate = useNavigate()
  const [username, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(localStorage.getItem("userInfo")
      )
    );
  }, [navigate]);
  
  const dispatch = useDispatch();
  const location = useLocation();
  
  const classess = useStyles();
  
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    //localStorage.setItem("userInfo", JSON.stringify(""));
    localStorage.removeItem("userInfo");
    //props.setUser(undefined);
   // props.history.push("/Auth");
    navigate("/Home/Auth")
    
  };

  useEffect(() => {
    console.log(username + "user");
  }, []);
  
  
// useEffect(() => {
//     const token = props.user?.token;

//     if (token) {
//       const decodedToken = decode(token);

//       if (decodedToken.exp * 1000 < new Date().getTime()) logout();
//     }

//     props.setUser(JSON.parse(localStorage.getItem('name')));
//   }, [location]);

const stringifiedPerson = localStorage.getItem("name");
const personAsObjectAgain = JSON.parse(stringifiedPerson);

  return (
    <div style={{position: 'fixed'}}>
    <header className={classes.header}>
      <div className={classes.logo}>Apartmate</div>
      <nav>
        <ul>
          <li>
            <Link to="/Home/Blog">Listings Page</Link>
          </li>
          <li>
            <Link to="/Home/CreatePost">Add Listing</Link>
          </li>
          <li>
            <Link to="/Home/MyPost">My Listings</Link>
          </li>
          <li>
            <Link to="/Home/Chats">Chat</Link>
          </li>
          {/* <li>
            <Link to="/Home/Map">Map</Link>
          </li> */}
          {/* <li>
            <Link to='/checkout'>checkout</Link>
          </li> */}
          <li>
          
          {username ? (
          <>
            {/* <Avatar className={classess.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classess.userName} variant="h6">{user?.result.name}</Typography> */}
            <Button style={{width: '60%'}} variant="contained"  color="secondary" onClick={logout}>Logout</Button>
            </>
        ) : (
          <>
          <Button style={{width: '60%'}}  component={Link} to="/Home/Auth" variant="contained" color="primary">Sign In</Button>
          </>
        )}
          </li>


        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;