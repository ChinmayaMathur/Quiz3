Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :auctions do
    resources :bids, only: [:create]
  end

  #---------------------API routes----------------------------->
  namespace :api, defaults:{format: :json } do
    namespace :v1 do
      resources :auctions do
        resources :bids, only: [:create]
      end
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        get :current, on: :collection # -> api/v1/users/current
      end
    end
    match "*unmatched_route", to: "application#not_found", via: :all
      # The route will match with any URL that hasn't been matched already
      # inside of the api namespace
      # The "*" prefix in the routes path allows this route wildcard
      # match ANYTHING
      # The "via:" argument is required and is used to specify which methods this route applies to
      # Example: via: [:get, :post, :patch]
      # via: all will match all possible methods
  end
end
