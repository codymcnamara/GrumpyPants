Rails.application.routes.draw do
  root to: 'root#root'
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
end
