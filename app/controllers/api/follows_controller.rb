class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(
      follower_id: current_user.id,
      playlist_id: params[:playlistId],
      artist_id: params[:artistId]
    )
    if @follow.save
      render json: {}
    else
      render {}
    end
  end

  # def destroy
  #   if params[:playlistId]
  #     @playlist = current_user.followed_playlists.find(params[:playlistId])
  #
  #   elsif params[:artistId]
  #     @follow = current_user.followed_artists.find(params[:artistId])
  #   end
  #
  #   @follow.destroy!
  #
  #   render json: { userId: @follow.follower_id, playlistId: @playlist.id }
  # end

  def follow_params
    params.require(:follow).permit(:playlistId, :artistId, :follower_id)
  end
end
