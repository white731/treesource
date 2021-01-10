class Api::OrderLineItemsController < ApplicationController
  before_action :authenticate_user!

  def index
    order = current_user.orders.find(params[:order_id])
    render json: order.order_line_items.all
  end

  def create
    order = current_user.orders.find(params[:order_id])
    order_line_item = order.order_line_items.new(order_line_item_params)
    if order_line_item.save
      render json: order_line_item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  private
  
  def order_line_item_params
    params.require(:order_line_item).permit(:product_id, :quantity, :price)
  end
end
