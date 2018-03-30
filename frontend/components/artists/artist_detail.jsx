import React from 'react';
import { connect } from 'react-redux';
import { requestArtist } from '../../actions/artist_actions';
import TrackIndex from '../tracks/track_index';
import { selectArtistTracks } from '../../reducers/selectors';

class ArtistDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
  }

  render() {
    const { artist, tracks, trackIndexType, openModal } = this.props;

    return (
      <div className="BLACKround">
        <div className="index-flexbox greyish">
          <div className="artist-cover-photo-container"
            style={{ backgroundImage: "url(https://i1.wp.com/basementofthedead.com/wp-content/uploads/2016/08/bigstock-Old-grunge-brick-wall-backgrou-44341411.jpg?fit=2800%2C1867&ssl=1)" }}>
          </div>
          <div className="left-spacing">

            <section className="artist-detail-container">
              <br/><br/><br/><br/>
              <h1 style={{ fontSize: "72px", fontWeight: "600" }}>{ artist.name }</h1>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <h1>Popular</h1>

              <div className="artist-detail-tracks">
                <TrackIndex
                  artistId={ this.props.match.params.artistId }
                  type={ trackIndexType }
                  tracks={ tracks } />
              </div>

            </section>


          </div>
        </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const artist = state.entities.artists[ownProps.match.params.artistId] || {};

  return {
    trackIndexType: "artist",
    artist: artist,
    tracks: selectArtistTracks(state, artist)
  };
};

const mdp = dispatch => {
  return {
    requestArtist: id => dispatch(requestArtist(id)),
    openModal: modal => dispatch(openModal(modal))
  };
}
export default connect(msp, mdp)(ArtistDetail);
