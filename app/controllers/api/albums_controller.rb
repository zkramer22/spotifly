class Api::AlbumsController < ApplicationController
  def index
    @albums = current_user.included_albums.uniq
    render "api/albums/index"
  end

  def show
    @album = Album.find(params[:id])
    render "api/albums/show"
  end
end
