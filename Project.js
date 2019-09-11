import React, {Component} from 'react'
class Project extends Component{
  render(){
    if (this.props.data){

      var user = this.props.data.map(function(user){
        return <div key={user.name}><h5>{user.name}</h5><ul>
        <li>{user.avatar}</li>
        <li>{user.id}</li>
        <li>{user.occupation}</li>
        </ul></div>
      })

    }
    return(
      <section id='Projects'>
        <div className="row user">
          <div className="twelve columns">
                  {user}
            </div>
        </div>
      </section>
    );
  }
}
export default Project
