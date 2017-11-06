import React from "react"

class Movie extends React.Component {

  render() {
    return (
      <div className = "comment">
        {this.props.title}
      </div>
    )
  }
}

export default Movie
