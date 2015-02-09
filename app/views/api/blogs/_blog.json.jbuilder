json.extract! blog, :id, :title, :filepicker_url, :user_id, :created_at, :updated_at

json.followed blog.followers.include?(current_user)

json.posts blog.posts, :id, :title, :body, :post_url, :blog_id, :created_at, :updated_at
