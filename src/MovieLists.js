import React, {Component} from 'react';
import UsersList from './UsersList.js';

class MovieLists extends Component{
  
  normalize(obj){
    return Object.entries(obj).map( item => item[1])
  }
  
  getUsersId(haystack, needle){
    return needle.filter( item => Number(item.favoriteMovieID) === haystack.id ).map(item => Number(item.userID))
  }
  
  render(){
    const users  = this.normalize(this.props.users), 
          movies = this.normalize(this.props.movies), 
          profiles = this.normalize(this.props.profiles);
    
    return (
      <ol>
        {
        	movies.map( (movie) => (
      			<li key={movie.id}>
      				<p>{movie.name}</p>
					<UsersList users={users.filter( user => this.getUsersId(movie, profiles).includes(user.id))} />
                 </li>
    	))}
      </ol>
    )
  }
}

export default MovieLists;