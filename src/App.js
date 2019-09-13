//React App
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Project from './Components/Project';
import ProcessLog from './Components/ProcessLog';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      UserData: {},
      logsData:{}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }
  //fetch data from user.json and load into App
  getUserData(){
    $.ajax({
      url:'/users.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({UserData: data});
        //console.log(this.state.UserData)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

//fetch data from logs.json and load in App
  getLogsData(){
    $.ajax({
      url:'/logs.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({logsData: data});
        console.log(this.state.logsData)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getUserData();
    this.getLogsData();
  }

  render() {
    return (
      <div className="App">
        <Project data={this.state.UserData.users}/>
        //uncomment below if needed entier logs.json into props
        // <ProcessLog data={this.state.logsData.transactions}/>
      </div>
    );
  }
}

export default App;
