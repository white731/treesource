Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get 'product_info/:order_id', to: 'order_line_items#product_info'
    resources :things
    resources :users
    resources :orders do 
      resources :order_line_items
        
    end
    resources :products
    resources :userproducts
    
  end

end
