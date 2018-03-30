class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all#.where(artist: params[:artist_id])
    render "api/artists/index"
  end

  def show
    @artist = Artist.find(params[:id])
    render "api/artists/show"
  end
end
