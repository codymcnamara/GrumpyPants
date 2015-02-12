Rails.application.routes.draw do
  root to: 'root#root'
  
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :blogs do
      post "follow", to: "blogs#follow"
      delete "follow", to: "blogs#unfollow"
    end
    resources :posts, only: [:create, :index]
    get 'posts/feed', to: 'posts#feed', as: :feed
    resources :followings
  end
end
