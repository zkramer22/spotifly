import React from 'react';
import { connect } from 'react-redux';
import { requestAllAlbums } from '../../actions/album_actions';
import { selectAllAlbums } from '../../reducers/selectors';
import { openModal } from "../../actions/modal_actions";
import AlbumIndexItem from './album_index_item';
import Topbar from '../bars/topbar';

  class AlbumIndex extends React.Component {
    componentDidMount() {
      this.props.requestAllAlbums();
    }

    render() {
      const { albums, openModal } = this.props;

      return (
        <div className="BLACKround">
          <div className="index-flexbox album-gradient">
            <div className="left-spacing">
              <Topbar openModal={ openModal } modalType="create"/>
              <section className="collection-index-container">
                <div className="playlist-index">
                  { albums.map(album => <AlbumIndexItem
                    key={ album.id } album={ album } />) }
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    }
  }

  const msp = state => {
    return {
      albums: selectAllAlbums(state)
    };
  };

  const mdp = dispatch => {
    return {
      openModal: modal => dispatch(openModal(modal)),
      requestAllAlbums: () => dispatch(requestAllAlbums())
    };
  };

export default connect(msp, mdp)(AlbumIndex);
