import React, { useState, useEffect } from "react";


/**
 * 
 * @param {*} param0 
 */
function ListFromRest({message}=props) {
  return (
    <>
    <h2>Country: {message.name}</h2>
    <h3>Region: {message.region.value}</h3>
    <h3>Region ID: {message.region.id}</h3>
    <h3>Capital City: {message.capitalCity}</h3>
    <h4>Longitude: {message.longitude}</h4>
    <h4>Latitude: {message.latitude}</h4>
    </>
  );
}

export default ListFromRest;
