json.array! @posts do |post|
    json.extract!(post, :id, :title, :body, :post_url, :blog_id, :created_at, :updated_at)

    json.image_url post.blog.filepicker_url || image_path('dwarf.png')
    json.author post.blog.user.username

end
