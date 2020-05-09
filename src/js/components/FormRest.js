/**
 * Remi P
 * May 9, 2020
 * UCI extension Spring 2020
 */


import React, { useState, useEffect } from "react";
import axios from "axios";
import ListFromRest from "./ListFromRest";


/**
 * fetches data from a REST api using react hooks
 * on startup its fetches list of country information from 
 * world banks web site and populate a dropdown list
 * 
 * From the drop down list the use can select a country and click submit
 * to fetch more detail from the same website and update the display
 * with more information.
 */
function formRest() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  let countryName = "US"

  useEffect(() => {
    axios.get('http://api.worldbank.org/v2/country?format=json')
        .then(res => {
            let data = res.data;
            setCountries(data[1]);
          })
    },[]);
  

    /**
     * 
     * @param {*} name 
     */
  const getCountryInfo=(name)=>{
    axios.get('http://api.worldbank.org/v2/country/'+ name+ '?format=json')
        .then(res => {
            let data = res.data;
            setCountry(data[1][0]);
          })
  }

  /**
   * 
   * @param {*} event 
   */
  const onSubmit=event=>{
    getCountryInfo(countryName);
    event.preventDefault();
  };

  /**
   * 
   * @param {*} data 
   */
  const onChange=data=>{
    console.log(data.target.value)
    countryName = data.target.value;
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Select Country:
        <select onChange={onChange}>
          {countries.map(country=><option key={country.id} value={country.id}>{country.name}</option>)}
        </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <hr/>
      {country.length == 0 ? <></>: <ListFromRest message={country}/>}
    </>
  );
}

export default formRest;
