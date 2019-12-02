import React from 'react';
import './App.css';
import {FormattedMessage} from "react-intl";

import Graph from "./components/Graph.js";
import MoviesList from "./components/MoviesList.js";

class App extends React.Component {

  constructor(props)
  {
    super(props);
  }

  render(){
    return (
      <div className="App container-fluid">
        
        <MoviesList locale={this.props.locale} />
      </div>
    );
  }

}

export default App;
