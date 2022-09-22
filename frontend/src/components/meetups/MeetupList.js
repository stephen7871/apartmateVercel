import React,{useRef,useState,useEffect} from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import InputBase from '@material-ui/core/InputBase';
import { Paper,Typography,TextField, Button, Box, Select, Form,  MenuItem, ListItemText, Label, InputLabel, FormLabel ,  } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import clas from './NewMeetupForm.module.css';
import PostChain from './PostChain'
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ComboBoxFirst from './firstpage/ComboBoxFirst';
import ComboBoxPostChain from './ComboBoxPostchain';



import { MenuProps, useStyles } from "./utils";

import { useSelector } from 'react-redux';
import List from './List';
import FormControl from '@material-ui/core/FormControl';
import ComboBoxPostchain from './ComboBoxPostchain';
import { max } from 'moment';






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
    

    const initialList = [
      {looking: '',typeval: '', bedrooms: ''}
    ];
    

    
   
    
    const [counter, setCounter]= useState(0);
   
  const [inputText, setInputText] = useState("");
  const [bedroomsval, setBedroomsval] = React.useState("");
  const [lookingfor, setLookingfor] = React.useState("Looking for");
  const [typeofplaceval, setTypeofplaceval] = React.useState("Type");
  const [selected, setSelected] = useState([]);
  const [typeval, setTypeval] = useState([]);
  const [maxval, setMaxval] = React.useState('');
  const [minval, setMinval] = React.useState('');
  const [show, SetShow] = React.useState(false);
  const [flag, setFlag] = React.useState(true);
  const [cflag, csetFlag] = React.useState(false)
  const [coll, setcoll] = useState('');
  const [list, setList] = React.useState({looking: '',typeval: '', bedrooms: ''});
  const [pricelist, setPricelist] = React.useState({min: '',max: ''});
  const [name, setName] = React.useState('');
  const [pclist, setPcist] =  React.useState({looking: '',typeval: '', bedrooms: ''});
  const [addlist, setAddlist] = React.useState([]);
  const [topost, setTopost] = React.useState({});
  const [address, setAddress] = React.useState('');
  const [addressSubmit, setAddressSubmit] = React.useState('');
  const [collegeSubmit, setCollegeSubmit] = React.useState('');
  const [firstAddress, setFirstAddress] = React.useState('');
 
 useEffect(async () => {
  setAddressSubmit(await JSON.parse(localStorage.getItem("firstaddress")));
  setAddress(await JSON.parse(localStorage.getItem("firstaddress")));
  setCollegeSubmit(await JSON.parse(localStorage.getItem("firstcollege")));
  console.log(JSON.stringify( await JSON.parse(localStorage.getItem("firstcollege")))+ " searchcollege in meetuplist");
}, [ ] );
  
// useEffect(async () => {
//   setAddressSubmit(await JSON.parse(localStorage.getItem("firstaddress")));
//   setAddress(await JSON.parse(localStorage.getItem("firstaddress")));
//   setCollegeSubmit(await JSON.parse(localStorage.getItem("firstcollege")));
//   console.log(JSON.stringify( await JSON.parse(localStorage.getItem("firstcollege")))+ " searchcollege in meetuplist");
// }, [ ] );

  const handleminvalChange = (event) => {
    setMinval(event.target.value);
  };

  const handlemaxvalChange = (event) => {
    setMaxval(event.target.value);
  };

  const handletypeChange = (event) => {
    setTypeofplaceval(event.target.value);
  };

  const handlelookingforChange = (event) => {
    setLookingfor(event.target.value);
  };
  
  const handlebednChange = (event) => {
    setBedroomsval(event.target.value);
  };

  const handleSubmitaddress = async (e) => {
    e.preventDefault();
    setAddress(addressSubmit);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (cflag == true){
      setMaxval(pricelist.max);
      setMinval(pricelist.min);
      csetFlag(false);
      setFlag(true);
      console.log(maxval+ " maxval")
      if (flag == false){
        setMaxval(pricelist.max);
        setMinval(pricelist.min);
        setFlag(true);
        csetFlag(false);
        console.log(maxval+ " maxval")
      }

    }
    csetFlag(true);
    setFlag(false);
    
  }
  const comboSubmit = async (e) => {
    e.preventDefault();
    setCollegeSubmit(await JSON.parse(localStorage.getItem("firstcollegesecond")));
    // console.log(coll +" coll")
    
    

      }

  const revealTextField = () =>{
    if (show == true){
      SetShow(false);
    }
    if (show == false){
      SetShow(true);
    }
  }
  // useEffect(() => {
    // storing input name
    //console.log(JSON.stringify(posts) + "meetuplist");
    
  // }, []);
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
    "TownHouse",
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
    console.log("changing type");
    if (value[value.length - 1] === "all") {
      setTypeval(typeval.length === typeoptions.length ? [] : typeoptions);
      return;
    }
    setTypeval(value);
    
  };


  
 

  // if (!user) {
  //   return (
  //     <Paper className={classes.paper}>
  //       <Typography variant="h6" align="center">
  //         Please Sign In to create your own memories and like other's memories.
  //       </Typography>
  //     </Paper>
  //   );
  // }

  const onchangeprice = (e) => {
    // e.preventDefault();
    //   setPostData({ ...postData, pricepermonth: e.target.value})
    let input = e.target.value ;
    if( !input || ( input[input.length-1].match('[0-9]') && input[0].match('[1-9]')) ){
      setPricelist({ ...pricelist, max: e.target.value })}
    }

    const onchangepricemin = (e) => {
      // e.preventDefault();
      //   setPostData({ ...postData, pricepermonth: e.target.value})
      let input = e.target.value ;
      if( !input || ( input[input.length-1].match('[0-9]') && input[0].match('[1-9]')) ){
        setPricelist({ ...pricelist, min: e.target.value })}
      }
      
 
     
  return (
    <>
    <Box sx={{ ...commonStyles, border: 1 }}>


    <FormControl className={opent.formControl} >
    <div className={clas.control}>
    
    <TextField label="address" type='text' required id='address'value={addressSubmit} onChange={(e) => setAddressSubmit( e.target.value)}/>
 
    <div onClick={handleSubmitaddress}>
      <Button>search</Button>
    </div>
  </div>
 
    </FormControl>

    

    <FormControl style={{width: '15%'}}className={opent.formControl} >
      <form onSubmit={comboSubmit}>

      <ComboBoxFirst coll={"display"}/>
      {/* <ComboBoxPostChain collegePostChain={collegeSubmit}/> */}
      <button onChange={comboSubmit}>search</button>
      </form>
      </FormControl>
   
      {/* <div className={classes.space}>
      </div> */}
      <FormControl variant="outlined" style={{width: '10%'}} className={opent.formControl} >
      <InputLabel  id="mutiple-select-label">Looking for</InputLabel>
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

    


      {/* <div>
      </div> */}
      <FormControl variant="outlined" style={{width: '13%'}} className={opent.formControl}  >
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

    {/* <div className={classes.space}>
      </div> */}

      {/* <div className={classes.space}>
      </div> */}
    <FormControl variant="outlined" style={{width: '10%'}} className={opent.formControl} >
    <InputLabel id="demo-simple-select-label">bedrooms</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={bedroomsval}
          label="bedrooms"
          onChange={handlebednChange}
        >
          <MenuItem value={""}>clear</MenuItem> 
          <MenuItem value={1}>1+</MenuItem>
          <MenuItem value={2}>2+</MenuItem>
          <MenuItem value={3}>3+</MenuItem>
          <MenuItem value={4}>4+</MenuItem>
        </Select>
      </FormControl>

     
      <>
      <FormControl style={{width: '10%'}} className={opent.formControl}>
      <Button onClick={revealTextField}> price </Button>
        {show && (
          <>
          <form onSubmit={handleSubmit}>
          <TextField id="filled-basic" label="max" variant="filled" value={pricelist.max} onChange={onchangeprice}/>
          
          <TextField id="filled-basic" label="min" variant="filled" value={pricelist.min} onChange={onchangepricemin}/>
         
          <button onChange={handleSubmit}>Submit</button>
         
          </form>
          </>
        )}
        </FormControl>
        </>

      
      


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


<ul className={classes.list}>
  {posts?.map((apartmentpost) => {
  //setPcist({looking: '',typeval: '', bedrooms: ''}); 

  
  // console.log(" list added bedroomsval for postchain");
  // if((list.bedrooms == pclist.bedrooms) && (list.looking == pclist.looking) && (list.typeval == pclist.typeval)){
     return(
       <PostChain firstAddress={firstAddress} college={collegeSubmit} pclist={pclist} address={address} setPcist={setPcist} counter={counter} list={list} collegesel={coll} maxval={maxval} minval={minval} post={apartmentpost} lookingfor={selected} typeval={typeval} bedroomsval={bedroomsval} input={inputText} setCurrentId={setCurrentId} />
   ); 
  //}

   
  })}
</ul>

{/* {flag && (
  <ul className={classes.list}>
  {posts.map((apartmentpost) => (
    <PostChain maxval={maxval} minval={minval} post={apartmentpost} lookingfor={selected} typeval={typeval} bedroomsval={bedroomsval} input={inputText} setCurrentId={setCurrentId} />
      
   
  ))}
</ul>
)}

{cflag && (
  <ul className={classes.list}>
  {posts.map((apartmentpost) => (
    <PostChain maxval={maxval} minval={minval} post={apartmentpost} lookingfor={selected} typeval={typeval} bedroomsval={bedroomsval} input={inputText} setCurrentId={setCurrentId} />
      
   
  ))}
</ul>
)

} */}



      
      {/* <PostChain input={inputText} setCurrentId={setCurrentId} /> */}
      {/* <List input={inputText} setCurrentId={setCurrentId}/> */}
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
