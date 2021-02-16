class OrderLineItem < ApplicationRecord
  belongs_to :product
  belongs_to :order

  def self.get_all_product_info(order_id)
    self.find_by_sql("select product_id, order_id, quantity, price, plant_id, plant_name, leaf_type_desc, root_type_desc,stem_type_desc,full_description, common_name,size_id,quantity_on_hand,quantity_on_sales_order,sales_price,origin   from order_line_items oli 
      inner join products p on p.id = oli.product_id
      where order_id = #{order_id}")
  end
end
