import React, { Component } from 'react';

class UsersList extends Component{
  render(){
    const users = this.props.users, 
          result = (users.length < 1) ? 
          		   (<p>None of the current users liked this movie</p>) 
                     : 
                   (
                      <div>
                        <p>Liked by :</p>
                        <ul>
                            {users.map( (user) => (<li key={user.name}>{user.name}</li>))}
                        </ul>
    				 </div>
                   )
    
    return result
  }
}

export default UsersList;