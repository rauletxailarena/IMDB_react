import React from "react"
import MovieList from "./MovieList"

class OpeningBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: [{id:1, title: "Sausage Party"},
    {id:2, title: "Cafe Society"}]
    }
  }

  render(){
    return (
      <div className="opening-box">
        <h1>
          UK Openings
        </h1>
        <MovieList data ={this.state.data}/>
        <h3>
          See more openings
        </h3>
        <button>Get showtime</button>
      </div>
    )
  }

}

export default OpeningBox
