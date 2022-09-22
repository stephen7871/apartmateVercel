/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import colleges from '../collegedata';
import { Button } from '@material-ui/core';


export default function ComboBoxFirst(props) {
  const [autoselectval, setAutoselectval] = React.useState('');
  useEffect(() => {
    //console.log(JSON.stringify(autoselectval.title) + " autoselectval changes in comboboxfirst");
  }, [autoselectval]);

  useEffect(async() => {
   console.log(JSON.stringify(await JSON.parse(localStorage.getItem("firstcollege"))) + " autoselectval in comboboxfirst");
   if(props.coll == "display"){
    setAutoselectval(await JSON.parse(localStorage.getItem("firstcollege")));
   }
    
  }, []);
  
  const navigate = useNavigate()
  const handleselectChange = (event) => {
    setAutoselectval(event.target.value);
  };

  const handleSubmitcollege = async (e) => {
    e.preventDefault();
    localStorage.setItem("firstcollege", JSON.stringify(autoselectval));
    localStorage.setItem("firstaddress", JSON.stringify(""));
    navigate("/Home/Blog");
  }


  return (
  

<>
    <Autocomplete
      id="combo-box-demo"
      options={colleges }
      value={autoselectval}

      getOptionLabel={(option) => option?.title}
    
      style={{ width: 300 }} 
      onChange={(event, value) => setAutoselectval(value)}
      renderInput={(params) => <TextField size="small" value={"here"} {...params} label="choose a college" variant="outlined" />}
    />
    <div onClick={handleSubmitcollege}>
        <Button>search</Button>
        </div>
        </>
          
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top