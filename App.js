import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Project from './Components/Projetcs';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      UserData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getUserData(){
    $.ajax({
      url:'/User.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({UserData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getUserData();
  }

  render() {
    return (
      <div className="App">
        <Project data={this.state.UserData.project}/>
      </div>
    );
  }
}

export default App;
