class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render "api/albums/index"
  end

  def show
    @album = Album.find(params[:id])
    render "api/albums/show"
  end
end
