class Api::SearchesController < ApplicationController
  def index
    @tracks = Track.search(params[:query])
    @albums = Album.search(params[:query])
    @artists = Artist.search(params[:query])
  end
end
