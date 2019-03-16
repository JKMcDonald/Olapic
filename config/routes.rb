Rails.application.routes.draw do
  get 'olapic/index'
    resources :olapic
  root 'olapic#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
