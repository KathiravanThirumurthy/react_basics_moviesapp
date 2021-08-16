import React, { Component } from 'react'
import { getMovies } from '../Services/Moviesdata'
import Movie from './Movie'

export class Movies extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
           movies:getMovies(),
      };
    }
    onDeletHandler=(movie)=>{
        const movies=this.state.movies.filter(m=>m.id !== movie.id)
        this.setState({
            movies:movies
        })
        

    };
  render() {
     if(this.state.movies.length == 0)
     {
         return <p>There is no movie in the database</p>
     }
    return (
      <div>
          <p>Showing {this.state.movies.length} from the database</p>
          <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">US Gross</th>
                    <th scope="col">Worldwide Gross</th>
                    <th scope="col">Production Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map((movie,index)=>(

                                <tr>
                                <td>{movie.Title}</td>
                                <td>{movie.US_Gross}</td>
                                <td>{movie.Worldwide_Gross}</td>
                                <td>{movie.Production_Budget}</td>
                                <td><button className="btn btn-danger btn-sm " onClick={()=>this.onDeletHandler(movie)}>Delete</button></td>
                                </tr>

                    ))}
                    

                </tbody>
            </table>
         
      </div>
    )
  }
}

export default Movies
