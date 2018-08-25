import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { Container, Button, Input } from 'reactstrap';
import {Ajax} from 'react-superagent';
import Customers from './components/fetchdata';

class App extends Component {
   constructor(){
     super();
     this.state = {
       Getdata : []
     } 
   }




  postdata(){
    var request = require('superagent');
    request
    .post('/api/items')
    .send({ name: 'chtan' }) // sends a JSON post body
    .set('X-API-Key', 'foobar')
    .set('accept', 'json')
    .end((err, res) => {
      alert('yay got ' + JSON.stringify(res.body));
    });
  
  };




  fetchdata2(){
    var request = require('superagent');
    request
  .get('/api/items')
  .end((err, res) => {
    // Do something
   console.log(res.body);
    
  });
};
  

  render() {
    return (
      <div className="App">
         <AppNavbar/>
         name: <input type = "text" value={this.state.email}/> <br/>
         <Button onClick={this.postdata.bind(this)}>Submit</Button><br/><br/>
     
         {/* <Button onClick={this.fetchdata2.bind(this)}>GetData</Button>
       */}
         {/* <h2>ItemList</h2> */}

         

        <Customers/>
      

      
      </div>
     
     

     
    );
  }




}

export default App;
