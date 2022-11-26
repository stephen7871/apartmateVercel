import React, { useState, useEffect } from 'react';

import classes from './NewMeetupForm.module.css';
import { TextField,Button } from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import InputBase from '@material-ui/core/InputBase';

import Cropped from './crop/Cropped';

import {useSelector } from 'react-redux';
import {makeStyles, withStyles } from '@material-ui/core/styles';





import ComboBox from './ComboBox';
import axios from 'axios';



const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyler = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));



const Apartment = ({ currentId, setCurrentId, user, setUser}) => {
    const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId) : null));




    const [postData, setPostData] = useState({address: '', nbedrooms: '', typeofplace: '', pricepermonth: '', nroomates: '', collegename: '', photos: '', description: '', username: ''});
    
   
    const [selectval, setSelectval] = React.useState('');
    const [roomatenum, setroomatenum] = React.useState('');
    
    const[nbedroomss,setNbedroomss ] = React.useState('')
    

    
    const [image, setImage] = React.useState([]);
    const [addImage, setAddimage] = React.useState(null);

    
    
    
      useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

      const handlenbedroomssChange = (event) => {
        setNbedroomss(event.target.value);
      };

  
  
   
    const clear = () => {
      setCurrentId(0);
      setPostData({address: '', nbedrooms: '', typeofplace: '', pricepermonth: '', nroomates: '', collegename: '', photos: '', description: '', username: '', typeofpost: '', selectval: '', roomatenum: ''});
    };
  
    const handleselectChange = (event) => {
        setSelectval(event.target.value);
      };

    // const fileSelected = event => {
    //   // const file = event.target.files

    //   const file = event.target.files
    //   setImage(file);
    //   console.log(JSON.stringify(image.indexOf(image[0].name)) + "image"); 
    // }

    const fileSelected = event => {
      // const file = event.target.files
      const file = event.target.files
      setAddimage(file);
      // console.log(JSON.stringify(addImage) + "addImage"); 
    }

    const fileSelectedAdd = () => {
      // const file = event.target.files
      // console.log(JSON.stringify(JSON.stringify(addImage[0].name)) + "addImage name"); 
      // const newList = image?.push(addImage[0].name);
      
      setImage([...image, addImage]);
      // console.log(JSON.stringify(image) + "image"); 
    }
    const handleAnotherPhoto = () => {
      console.log(JSON.stringify(image.name) + "image"); 
      const newList = image.concat(addImage);
      setImage(newList);
    }

    const handleChange = event => {
      const file = event.target.files
      setAddimage(file);
    }

    const clearPhotos = event => {
      
      setImage(null);
    }
    

      const handleselectromate = (event) => {
        setroomatenum(event.target.value);
      };
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      };


      
         const formdata = new FormData();
         
         for ( let i = 0; i < image.length; i++ ) {
          formdata.append( "imagecropped", image[ i ], image[ i ].name );
        }
        console.log(JSON.stringify(image) + "image")
          const collegesel = await JSON.parse(localStorage.getItem("autoselectval"));
            //   // {photos: formdata, address: postData.address, nbedrooms: nbedroomss, pricepermonth: postData.pricepermonth, description: postData.description,username: user?.username, typeofplace: selectval, nroomates: roomatenum, typeofpost: 'Apartment and Roomate', collegename: collegesel.title},
        formdata.append("address", postData.address)
        formdata.append("nbedrooms", nbedroomss)
        formdata.append("pricepermonth", postData.pricepermonth)
        formdata.append("description", postData.description)
        formdata.append("username", user?.username)
        formdata.append("typeofplace", selectval)
        formdata.append("nroomates", roomatenum)
        formdata.append("typeofpost", 'Apartment and Roomate')
        formdata.append("collegename", collegesel.title)
         await axios.post("/posts", formdata, { headers: {
					'accept': 'application/json',
					'Content-Type': 'multipart/form-data'
				}})
       
      if (currentId === 0) {
    
        clear();
      } else {
        
        clear();
      }
    };
    const onchangeprice = (e) => {
      let input = e.target.value ;
      if( !input || ( input[input.length-1].match('[0-9]') && input[0].match('[1-9]')) ){
      setPostData({ ...postData, pricepermonth: e.target.value})
      }
      }
    
      
  

    return(
      <div>
        {/* <Cropped/> */}
        
        <form className={classes.form} onSubmit={handleSubmit}>
  <div className={classes.control}>
    <label htmlFor='title'>address</label>
    <input type='text' id='address' value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value})}/>
  </div>
 

  <div className={classes.control}>
    <label htmlFor='min' >number of bedrooms</label>
    <div>
      <FormControl className={classes.margin}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={nbedroomss}
          onChange={handlenbedroomssChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    
    </div>
  </div>

  <div className={classes.control}>
    <label htmlFor='min' >house or apartment</label>
    <div>
      <FormControl className={classes.margin}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={selectval}
          onChange={handleselectChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"House"}>House</MenuItem>
          <MenuItem value={"Apartment"}>Apartment</MenuItem>
          <MenuItem value={"Condo"}>Condo</MenuItem>
          <MenuItem value={"TownHouse"}>TownHouse</MenuItem>
        </Select>
      </FormControl>
    
    </div>
  </div>
 
  <div className={classes.control}>
    <label htmlFor='max'>price per month</label>
    <TextField name="pricepermonth"
    variant="outlined" inputProps={{pattern: "[0-9]*",}} fullWidth value={postData.pricepermonth} onChange={onchangeprice} />

  </div>
  <div className={classes.control}>
    <label htmlFor='nroomates'>number of roomates</label>
    <FormControl className={classes.margin}>
        
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={roomatenum}
          onChange={handleselectromate}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7+</MenuItem>
        </Select>
      </FormControl>
  </div>
  <div className={classes.control}>
    <label htmlFor='college'>Tag a college Location</label>
    </div>
    <ComboBox/>
    

  <div className={classes.control}>
    {/* <label htmlFor='wanttolive'>add photosss</label> */}
    <div>
    <div className="container-buttons">

    <input multiple onChange={fileSelected} type="file" accept="image/*"></input>
    {/* <input multiple onChange={handleChange} type="file" accept="image/*"/>
     
    */}
    <Button  onClick={fileSelectedAdd}>
          Add
        </Button> 
   
          
              </div>
          </div>
  <Button onclick={clearPhotos}>clear</Button>
  </div>
  <div className={classes.control}>
    <label htmlFor='description'>any other things to add</label>
    <textarea id='description'  rows='5' value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}></textarea>
  </div>
  <div className={classes.actions}>
    <button>Add listing</button>
  </div>
</form>
</div>
    );
}
export default Apartment;