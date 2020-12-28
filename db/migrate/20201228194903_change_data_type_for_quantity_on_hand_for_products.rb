class ChangeDataTypeForQuantityOnHandForProducts < ActiveRecord::Migration[6.0]
  def change
    change_column :products, :quantity_on_hand, :float
    change_column :products, :quantity_on_sales_order, :float
  end
end
