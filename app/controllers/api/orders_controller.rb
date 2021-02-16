class Api::OrdersController < ApplicationController
  before_action :authenticate_user!

  def index
    orders = current_user.orders.all
    render json: orders
  end

  def create
    # binding.pry
    order = current_user.orders.new(order_params)
    if order.save
      render json: order
    else
      render json: {errors: order.errors}, status: :unprocessable_entity
    end
  end

  private

  def order_params
    params.require(:order).permit(:customer_name,:job_name,:po_number,:price_tier,:shipping_address,:shipping_city,:shipping_state,:shipping_zip)
  end
end

# 