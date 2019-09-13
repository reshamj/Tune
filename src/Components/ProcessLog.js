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
        </div>
      </section>
    );
  }
}
export default ProcessLog
