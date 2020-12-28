class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :plant_id
      t.string :plant_name
      t.string :leaf_type_desc
      t.string :root_type_desc
      t.string :stem_type_desc
      t.string :full_description
      t.string :common_name
      t.string :size_id
      t.integer :quantity_on_hand
      t.integer :quantity_on_sales_order
      t.float :sales_price
      t.string :origin

      t.timestamps
    end
  end
end
