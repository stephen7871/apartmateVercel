import React,{useState,useEffect} from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import InputBase from '@material-ui/core/InputBase';
import { Paper,Typography,TextField, Button, Box, Select, MenuItem, ListItemText, Label, InputLabel, FormLabel  } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";





import { MenuProps, useStyles } from "./utils";

import { useSelector } from 'react-redux';
import List from './List';
import FormControl from '@material-ui/core/FormControl';
import ComboBox from './ComboBox';






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
const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: "100%",
  padding: '10px',

 
  height: '5rem',
};

const opentop = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



  const MeetupList = ({ setCurrentId, user }) => {
    
    
    

    
   
    const posts = useSelector((state) => state.posts);
    const [counter, setCounter]= useState(0);
    const [postList, setPostList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [bedroomsval, setBedroomsval] = React.useState("bedrooms");
  const [lookingfor, setLookingfor] = React.useState("Looking for");
  const [typeofplaceval, setTypeofplaceval] = React.useState("Type");
  const [selected, setSelected] = useState([]);
  const [typeval, setTypeval] = useState([]);
  
  useEffect(() => {
    console.log( JSON.stringify(typeval) + " typeval");
    console.log( JSON.stringify(selected) + " selected");
  }, [typeval,selected]);

  const handletypeChange = (event) => {
    setTypeofplaceval(event.target.value);
  };

  const handlelookingforChange = (event) => {
    setLookingfor(event.target.value);
  };
  
  const handlebednChange = (event) => {
    setBedroomsval(event.target.value);
  };

  useEffect(() => {
    // storing input name
    console.log(JSON.stringify(posts) + "meetuplist");
    
  }, []);
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const opent = opentop();
  const classess = useStyles();
  
  const lookingforoptions = [
    "Apartment and Roomate",
    "Looking for a Roomate",
    "Renting",
  ];

  const typeoptions = [
    "House",
    "Townhouse",
    "Apartment",
    "Condo",
  ];
  const isAllSelected =
  lookingforoptions.length > 0 && selected.length === lookingforoptions.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === lookingforoptions.length ? [] : lookingforoptions);
      return;
    }
    setSelected(value);
  };

  const typeChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setTypeval(typeval.length === typeoptions.length ? [] : typeoptions);
      return;
    }
    setTypeval(value);
  };

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
    <Box sx={{ ...commonStyles, border: 1 }}>
    

    <FormControl className={classes.margin}>
      <ComboBox/>
      </FormControl>
      <div className={classes.space}>
      </div>
      <FormControl className={classess.formControl}>
      <InputLabel id="mutiple-select-label">Looking for</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        <MenuItem
          value="all"
          classes={{
            root: isAllSelected ? classes.selectedAll : ""
          }}
        >
          <ListItemIcon>
            <Checkbox
              classes={{ indeterminate: classes.indeterminateColor }}
              checked={isAllSelected}
              indeterminate={
                selected.length > 0 && selected.length < lookingforoptions.length
              }
            />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.selectAllText }}
            primary="Select All"
          />
        </MenuItem>
        {lookingforoptions.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    

      <div className={classes.space}>
      </div>

{/* 
      <FormControl className={classes.margin}>
      
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={lookingfor}
          onChange={handlelookingforChange}
          input={<BootstrapInput />}
          style= {{width: '150px'}}
        >
          <MenuItem value={lookingfor}>
            <em>{lookingfor}</em>
          </MenuItem>
          
          <MenuItem value={"Apartment"}>Looking for roomate and a place</MenuItem>
          <MenuItem value={"Roomate"}>Looking for a roomate</MenuItem>
          <MenuItem value={"Selling"}>renting</MenuItem>
        </Select>
      </FormControl> */}
    
    {/* <div className={classes.space}>
      </div> */}
      <div className={classes.space}>
      </div>
      <FormControl className={classess.formControl}>
      <InputLabel id="mutiple-select-label">Type of Place</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={typeval}
        onChange={typeChange}
        renderValue={(typeval) => typeval.join(", ")}
        MenuProps={MenuProps}
      >
        <MenuItem
          value="all"
          classes={{
            root: isAllSelected ? classes.selectedAll : ""
          }}
        >
          <ListItemIcon>
            <Checkbox
              classes={{ indeterminate: classes.indeterminateColor }}
              checked={isAllSelected}
              indeterminate={
                typeval.length > 0 && typeval.length < typeoptions.length
              }
            />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.selectAllText }}
            primary="Select All"
          />
        </MenuItem>
        {typeoptions.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox checked={typeval.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    <div className={classes.space}>
      </div>
    {/* <FormControl className={classes.margin}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={typeofplaceval}
          onChange={handletypeChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={typeofplaceval}>
            <em>{typeofplaceval}</em>
          </MenuItem>
          <MenuItem value={"House"}>House</MenuItem>
          <MenuItem value={"Apartment"}>Apartment</MenuItem>
          <MenuItem value={"Townhouse"}>Townhouse</MenuItem>
          <MenuItem value={"Condo"}>Condo</MenuItem>
          
        </Select>
      </FormControl> */}

      <div className={classes.space}>
      </div>
    <FormControl className={opent.formControl}>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bedroomsval}
          onChange={handlebednChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7+</MenuItem>
        </Select>
      </FormControl>
        {/* <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={bedroomsval}
          onChange={handlebednChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={bedroomsval}>
            <em>{bedroomsval}</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7+</MenuItem>
        </Select>
      </FormControl> */}


</Box>



    <div className="main">
      {/* <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search by title"
        />
      </div> */}

    
{/* <ul className={classes.list}>
        {apartmentposts.map((apartmentpost) => (
          
            <MeetupItem
              post={apartmentpost} 
              setCurrentId={setCurrentId}/>
         
        ))}
        </ul> */}
      
      
      <List input={inputText} setCurrentId={setCurrentId}/>
      {/* <>
      { counter ? ( */}
          {/* <ul className={classes.list}>
          {postList.map((post) => (
            <MeetupItem
              post={post} 
              setCurrentId={setCurrentId}
            />
          ))}
        </ul> */}
          {/* )
      :
      (
          <Alert severity="info">You have no post yet.  Add your own posts by going to the "Add Post" page</Alert>
      )} */}
      
  {/* </> */}
    </div>
    </>
  );
}

export default MeetupList;
