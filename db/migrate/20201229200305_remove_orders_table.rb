class RemoveOrdersTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :order_line_items
    drop_table :orders
  end
end
