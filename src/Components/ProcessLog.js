import React, {Component} from 'react'
class ProcessLog extends Component{
  render(){
    if (this.props.data){
      console.log("ok true--logs");
      //console.log(this.props.data);
      var logs = this.props.data.map(function(logs){
        return <div key={logs.user_id}><h5>{logs.user_id}</h5><ul>
        <li>{logs.type}</li>
        <li>{logs.revenue}</li>
        </ul></div>
      })

    }
    return(
      <section id='processlog'>
        <div className="row logs">
          {logs}
        </div>
      </section>
    );
  }
}
export default ProcessLog
