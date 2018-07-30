class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(
      follower_id: current_user.id,
      playlist_id: params[:playlistId],
      artist_id: params[:artistId]
    )

    if params[:artistId]
      @artist = Artist.find(params[:artistId])
      if @follow.save
        render "api/artists/show"
      else
        render {}
      end
    elsif params[:playlistId]
      @playlist = Playlist.find(params[:playlistId])
      if @follow.save
        render "api/playlists/show"
      else
        render {}
      end
    end
  end

  def destroy
    if params[:artistId]
      @artist = Artist.find(params[:artistId])
      @follow = @artist.follows.find_by(follower_id: current_user.id)
      @follow.destroy!
      render "api/artists/show"
    elsif params[:playlistId]
      @playlist = Playlist.find(params[:playlistId])
      @follow = @playlist.follows.find_by(follower_id:; current_user.id)
      @follow.destroy!
      render "api/playlists/show"
    end
  end

  def follow_params
    params.require(:follow).permit(:playlistId, :artistId, :follower_id)
  end
end
