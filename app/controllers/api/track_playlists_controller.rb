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
    @playlist = current_user.created_playlists.find(params[:id])

    @track_playlist = @playlist.track_playlists.find_by(
      track_id: params[:trackId],
      playlist_id: @playlist.id
    )
    @track_playlist.destroy!
    render json: { trackId: @track_playlist.track_id, playlistId: @playlist.id }
  end
  #
  def track_playlist_params
    params.require.(:track_playlist).permit(:playlistId, :trackId)
  end
end
