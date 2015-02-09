class Addindextoblogtable < ActiveRecord::Migration
  def change
    add_index :blogs, :user_id, unique: true

  end
end
