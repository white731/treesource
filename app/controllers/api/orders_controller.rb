class Api::OrdersController < ApplicationController
  before_action :authenticate_user!

  def index
    orders = current_user.orders.all
    render json: orders
  end

  def create
    
  end
  
end
