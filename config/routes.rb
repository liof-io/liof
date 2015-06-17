Rails.application.routes.draw do
  root 'home#index'

  resources :lists

  get 'autocomplete', to: 'lists#autocomplete'
end
