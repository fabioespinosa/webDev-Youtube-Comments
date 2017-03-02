import React, {Component} from 'react';


class Sugerencia extends Component {
  
  render() {
    return(
      <div onClick={() => this.props.ponerVideo(this.props.video)}>
        <img src={this.props.video.snippet.thumbnails.default.url}/>
        {this.props.video.snippet.title}
      </div>
    )
  }
}

export default Sugerencia;
