import React from 'react';
import values from 'lodash/values';

class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playlist: [],
      tracks: []
    };
  }

  componentDidMount() {
    this.props.requestSinglePlaylist(this.props.match.params.playlistId);
    // make sure playlistId is passed from CollectionContainer or PlaylistContainer
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.playlistId !== nextProps.match.params.playlistId) {
      this.props.requestSinglePlaylist(this.props.match.params.playlistId)
    }
  }

  render() {
    // TODO: Write a Damn Conditional and render loading screen if shit isnt ready 

    const { playlist, tracks } = this.props;

    return (
      <section className="playlist-detail-container">
        <div className="playlist-detail-info">
          <img
            style={{height: "100px", width: "100px"}}
            className="playlist-index-item-coverart"
            src="http://freevector.co/wp-content/uploads/2011/01/8710-spotify-logo-button1.png"
            alt="meh" />
          <strong>{ playlist.name }</strong>
          {/* <span>{ playlist.creator.name }</span> */}
        </div>

        <div className="playlist-detail-tracks">
          <ol className="playlist-tracklist">
            { Object.values(tracks).map(track => {
              return <li key={track.id}>{track.name}</li>
            }) }
          </ol>
        </div>
      </section>
    );
  }
}

export default PlaylistDetail;
