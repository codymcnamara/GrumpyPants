json.extract! blog, :id, :title, :user_id, :created_at, :updated_at
json.filepicker_url blog.filepicker_url || image_path('dwarf.png')
json.followed blog.followers.include?(current_user)

json.posts blog.posts, :id, :title, :body, :post_url, :blog_id, :created_at, :updated_at
