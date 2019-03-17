import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause.js'

class VideoPlayer extends Component {
  
  state ={
    pause: true
  }


  togglePlay = (event) =>{
    this.setState({
      pause: !this.state.pause
    })
  }
  
  
  render() {
    return (
      <VideoPlayerLayout>
         <Title title="skere"/>
         <PlayPause
         pause={this.state.pause}
         handleClick={this.togglePlay}
         />
        <Video
        autoplay={false}
        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;