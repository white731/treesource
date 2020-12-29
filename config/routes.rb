Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :things
    resources :users
    resources :orders do 
      resources :order_line_items
    end
    resources :products
    resources :userproducts
    
  end

end
