class Order < ApplicationRecord
  belongs_to :users
  has_many :order_line_items
  has_many :products, through: :order_line_items
end
