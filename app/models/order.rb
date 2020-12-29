class Order < ApplicationRecord
  has_many :order_line_items
  has_many :products, through :order_line_items
end
