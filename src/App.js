import React from 'react';
import './App.css';
import {FormattedMessage} from "react-intl";

import Graph from "./components/Graph.js";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h1><FormattedMessage id="Title" /></h1>
        <Graph/>
      </div>
    );
  }
  
}

export default App;
