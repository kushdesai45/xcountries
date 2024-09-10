import './App.css';
import { useState,useEffect } from 'react';
import React from 'react';
import axios from 'axios';

function App() {
  const [countries,setCountries] = useState([]);

  const getCountries = async() => {
    try{
      const url = 'https://xcountries-backend.azurewebsites.net/all';
      let data = await axios.get(url);
      console.log("data",data?.data)
      setCountries(data?.data);
      // return data?.data;
    }catch(error){
      console.log("error",error);
      return {"Error fetching data:":error?.message}
    }
  }

  useEffect(()=>{
    const load = async() => {
      getCountries();
    }
    load();
  },[])

  return (
    <div className="container">
      {
        countries && countries.map((country,idx)=>(
          <div className='countryContainer'>
            <img src={country?.flag} alt={country?.name} className='countryImg'/>
            <p>{country?.name}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
