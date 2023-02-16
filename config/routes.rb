Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 
  resources :homemades, only: [:index, :show, :create, :update, :destroy] do
    # nested resource for reviews
    resources :reviews, only: [:show, :index]
  end
  
  resources :reviews, only: [:index, :show, :create, :update, :destroy]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
