//Use this file if needed to import logs.json as props in React
//Currently not used in the code

import React, {Component} from 'react'
class ProcessLog extends Component{
  render(){
    if (this.props.data){
      console.log(this.props.data)
      var logs = this.props.data;
    }
    return(
      <section id='project'>
        <div className="row user">
        {logs}
        </div>
      </section>
    );
  }
}
export default ProcessLog
