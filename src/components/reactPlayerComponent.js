import React, {Component, Suspense} from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import './default.css';

class ReactPlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }
  
handlePlay = () => {
  this.setState({ playing: true });
}

handlePause = () => {
  this.setState({ playing: false });
}

ref= (player) => {
  this.player = player
}

renderLoader = () => {
  return (
    <div style={{textAlign: 'center'}}>Loading....</div>
  )
}

  render() { 
    return ( 
      <div className='player-wrapper'>
        <Suspense fallback={this.renderLoader()}>
          <ReactPlayer
            ref={this.ref}
            preload="auto"
            url={this.props.url}
            className='react-player'
            playing
            controls
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            height="100%"
            width="100%"
            config={{
              youtube: {
                playerVars: {
                  rel: 0,
                  modestbranding: 1,
                }
              },
              file: {
                attributes: {
                  controlsList: 'nodownload',
                  onContextMenu: e => e.preventDefault()
                }
              }
            }}
          />
        </Suspense>
      </div>
     );
  }
}

ReactPlayerComponent.propTypes = {
  url: PropTypes.string.isRequired
};

export default ReactPlayerComponent;