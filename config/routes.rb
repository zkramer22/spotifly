Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :playlists, except: [:new]
    resources :tracks, only: [:index, :show]
    resources :track_playlists, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :searches, only: [:index]
  end

  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
