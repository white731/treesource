class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :order_status
      t.string :customer_name
      t.string :job_name
      t.string :po_number
      t.string :price_tier
      t.string :shipping_address
      t.string :shipping_city
      t.string :shipping_state
      t.string :shipping_zip

      t.timestamps
    end
  end
end
