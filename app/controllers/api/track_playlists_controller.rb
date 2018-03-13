class Api::TrackPlaylistsController < ApplicationController
  def create
    @track_playlist = TrackPlaylist.new(
      track_id: params[:trackId],
      playlist_id: params[:playlistId]
    )
    if @track_playlist.save
      render json: {}
    else
      render {}
    end
  end

  def destroy
    # @track_playlist = current_user.created_playlists.track_playlists.find(
    #   track_id: params[:trackId],
    #   playlist_id: params[:playlistId]
    # )
    # @track_playlist.destroy!
    #
  end
  #
  def track_playlist_params
    params.require.(:track_playlist).permit(:playlistId, :trackId)
  end
end
