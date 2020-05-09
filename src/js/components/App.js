// src/js/components/App.js
import React from "react";
import FormRest from "./FormRest";
import ListFromRest from "./ListFromRest";


const App = () => (
  <>
    <div>
      <h2>The World Bank</h2>
      <h3>Country Information Lookup</h3>
      <FormRest />
    </div>
    {/* <hr/>
    <div>
      <h1>Country Information</h1>
      <ListFromRest />
    </div> */}
  </>
);

export default App;

