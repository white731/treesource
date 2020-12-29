class Api::ProductsController < ApplicationController
  def index
    products = Product.first(500)
    render json: products
  end
end
