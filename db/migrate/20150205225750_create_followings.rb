class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.integer :blog_id, null: false
      
      t.timestamps null: false
    end
  end
end
