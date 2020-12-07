import React, { Component } from "react";
import "./CSS/App.css";
import Table1 from "./Table1";
import Axios from 'axios';
//import CoinTable from './components/coin-table'
import coinData from './data/coins.json'
//import DBConfig from "./API/DBConfig"; // can't do because you need to have the api 

// creates a "template" of the components that will be used
// Header and Content need to be capitalized in order to work
class App extends Component
{
  render()
  {
    return( // left paren has to go there otherwise it'll fail out
      <div>
        <Header/>
        <Content/> 
        <CoinTable/>
        <ActorTable/>
      </div>
    );
  }
}

export class Header extends Component
{
  render()
  {
    return(
      <div>
        <center><h1>Learning React</h1></center>
      </div>
    );
  }
}

export class Content extends Component {
  render() 
  {
    return (
        <div>
           <h2>Content</h2>
           <p>The content text!!</p>
        </div>
     );
  };
};
// coin information table
export class CoinTable extends Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header">Coin Information</p>
        <Table1 data={coinData}/>
      </div>
    );
  };
}; 

// Actor information table
export class ActorTable extends Component {
  render() {
    return (
      <div className="App2">
        <p className="Table-header">Actor Table</p>
      </div>
    );
  };
};

export default ;