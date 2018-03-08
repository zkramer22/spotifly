class Api::PlaylistsController < ApplicationController

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render "api/playlists/show"
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlists = Playlist.all.where(creator_id: current_user.id)
    render "api/playlists/index"
  end

  def show
    @playlist = Playlist.find(params[:id])
    render "api/playlists/show"
  end

  def update
    @playlist = current_user.playlists.find(params[:id])
    if @playlist.update(playlist_params)
      render "api/playlists/index"
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = current_user.playlists.find(params[:id])
    @playlist.destroy
    render "api/playlists/index"
  end

  def playlist_params
    params.require(:playlist).permit(:name, :creator_id)
  end
end
