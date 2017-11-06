import React from "react"
import Movie from "./Movie.jsx"

class MovieList extends React.Component{

  render(){
    const movieNodes = this.props.data.map(function(movie) {
      return (
        <Movie title={movie.title}/ >
      )
    })

    return (
      <div className="movie-list">
        {movieNodes}
      </div>
    )
  }
}

export default MovieList
