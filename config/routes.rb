Rails.application.routes.draw do

  root 'lists#index'
  resources :lists
  get 'autocomplete', to: 'lists#autocomplete', as: :autocomplete
end
