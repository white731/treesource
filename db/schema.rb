# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_29_201223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "order_line_items", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.bigint "order_id", null: false
    t.float "quantity"
    t.float "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["order_id"], name: "index_order_line_items_on_order_id"
    t.index ["product_id"], name: "index_order_line_items_on_product_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "order_status"
    t.string "customer_name"
    t.string "job_name"
    t.string "po_number"
    t.string "price_tier"
    t.string "shipping_address"
    t.string "shipping_city"
    t.string "shipping_state"
    t.string "shipping_zip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "plant_id"
    t.string "plant_name"
    t.string "leaf_type_desc"
    t.string "root_type_desc"
    t.string "stem_type_desc"
    t.string "full_description"
    t.string "common_name"
    t.string "size_id"
    t.float "quantity_on_hand"
    t.float "quantity_on_sales_order"
    t.float "sales_price"
    t.string "origin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "things", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "order_line_items", "orders"
  add_foreign_key "order_line_items", "products"
end
