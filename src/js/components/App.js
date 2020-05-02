// src/js/components/App.js
import React from "react";
import List from "./List";
import Form from "./Form";


const App = () => (
  <>
    <div>
      <h2>Create shopping List</h2>
      <Form />
    </div>
    <div>
      <h2>Shopping List</h2>
      <List />
    </div>
  </>
);

export default App;

