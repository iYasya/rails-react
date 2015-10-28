Rails.application.routes.draw do
  root 'page#index'

  resources :comments
end
