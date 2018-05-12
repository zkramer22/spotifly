class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.find(current_user.followed_artists.ids)
    
    render "api/artists/index"
  end

  def show
    @artist = Artist.find(params[:id])
    render "api/artists/show"
  end
end
