class Api::ProductsController < ApplicationController
  def index
    products = Product.first(500)
    # products = Product.all
    render json: products
  end
end
