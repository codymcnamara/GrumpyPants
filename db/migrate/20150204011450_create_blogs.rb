class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.integer :user_id, null: false
      t.string  :title, null:false
      t.string  :filepicker_url

      t.timestamps null: false
    end
  end
end
