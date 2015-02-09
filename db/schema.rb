# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150209004136) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blogs", force: true do |t|
    t.integer  "user_id",        null: false
    t.string   "title",          null: false
    t.string   "filepicker_url"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "blogs", ["user_id"], name: "index_blogs_on_user_id", unique: true, using: :btree

  create_table "followings", force: true do |t|
    t.integer  "follower_id", null: false
    t.integer  "blog_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "followings", ["blog_id", "follower_id"], name: "index_followings_on_blog_id_and_follower_id", unique: true, using: :btree

  create_table "posts", force: true do |t|
    t.integer  "blog_id",    null: false
    t.string   "title",      null: false
    t.text     "body"
    t.string   "post_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
