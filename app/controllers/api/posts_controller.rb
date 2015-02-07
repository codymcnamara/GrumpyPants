module Api
  class PostsController < ApiController
    def create
      @post = Post.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    # def feed
    #   blogs = Blog.all
    #   @posts = []
    #
    #   blogs.each do |blog|
    #     blog.followers.each do |follower|
    #       @posts << blog.posts if follower.id == current_user.id
    #     end
    #   end
    #
    #   render json: @posts[0]
    # end

    def index
      @posts = current_user.feed_posts
      render :index
    end

    private

    def post_params
      params.require(:post).permit(:title, :post_url, :body, :blog_id)
    end

  end
end
