class Api::OrderLineItemsController < ApplicationController
  before_action :authenticate_user!

  def index
    order = current_user.orders.find(params[:order_id])
    render json: order.order_line_items.all
    
  end

  def create
  end
end
