class Adduniqueindextofollwoings < ActiveRecord::Migration
  def change
    add_index :followings, [:blog_id, :follower_id], unique: true
  end
end
