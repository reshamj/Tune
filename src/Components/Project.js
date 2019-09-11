import React, {Component} from 'react'
class Project extends Component{
  render(){
    if (this.props.data){
      console.log("ok true");
      var user = this.props.data.map(function(user){
        return <div key={user.name}><h5>{user.name}</h5><ul>
        <li>{user.avatar}</li>
        <li>{user.id}</li>
        <li>{user.occupation}</li>
        </ul></div>
      })

    }
    return(
      <section id='project'>
        <div className="row user">
          {user}
        </div>
      </section>
    );
  }
}
export default Project
