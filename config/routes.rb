Rails.application.routes.draw do
  get 'home/index'
  resources :songs
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
