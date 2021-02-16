class Api::UserproductsController < ApplicationController
  before_action :authenticate_user!

  def index
    products = Product.first(500)
    # products = Product.all
    render json: products
  end
  
end
