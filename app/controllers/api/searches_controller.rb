class Api::SearchesController < ApplicationController
  def index
    @tracks = Track.search(params[:query])
  end
end
