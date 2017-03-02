import React, {Component} from 'react';
import Sugerencia from './sugerencia';

class Sugerencias extends Component {
  
  render() {
    if(this.props.videos) {
      return(
        <div className="col-md-4">
          {this.props.videos.map((video, index) => {
            if(index != 0) {
              return <Sugerencia key={video.id.videoId} video={video} ponerVideo={this.props.ponerVideo}/>
            }
          })}
        </div>
      )
    }
    else {
      return(
        <div></div>
      )
    }

  }
}

export default Sugerencias;
