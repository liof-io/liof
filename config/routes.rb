Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  resources :lists

  get 'autocomplete', to: 'lists#autocomplete'
end
