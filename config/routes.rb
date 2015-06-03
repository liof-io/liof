Rails.application.routes.draw do

  root 'lists#index'
  resources :lists
end
