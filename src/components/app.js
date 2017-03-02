import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import Buscador from './buscador';
import VideoPlayer from './video_player';
import Sugerencias from './sugerencias';
import Comentarios from './comentarios/comentarios';

const API_KEY = 'AIzaSyD7AeJ_fi01jWanRgPibiUCgWuSFb7nFkE';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }
  
  
  buscarVideoYoutube(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  render() {
    return(
      <div>
        <Buscador buscarVideoYoutube={this.buscarVideoYoutube.bind(this)} />
        <div className="row margen">
          <VideoPlayer video={this.state.selectedVideo}/>
          <Sugerencias videos={this.state.videos} ponerVideo={(video) => {this.setState({selectedVideo: video})}} />  
        </div>
        <div className="row">
          <Comentarios/>
        </div>
        
      </div>
    )
  }
}

export default App;
