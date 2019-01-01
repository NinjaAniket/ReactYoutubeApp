import youtube from '../src/api/youtube';
import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import VideosList from './Components/VideosList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {videos: [], selectedVideo: null}

  componentDidMount() {
    this.onTermSubmit('messi')
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState( {
    videos: response.data.items,
    selectedVideo: response.data.items[1]
    })
  }

  onVideoSelect = video => {
    this.setState({
        selectedVideo: video      
    })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit = {this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video = {this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList onVideoSelect={this.onVideoSelect} videos = {this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
