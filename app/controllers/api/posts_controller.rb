module Api
  class PostsController < ApiController
    def create
      @post = current_user.blog.posts.new(post_params)
      # @post = Post.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @posts = current_user.feed_posts.includes(:blog).page(params[:page]).per(15)
      @page = params[:page]
      render :index
    end

    private

    def post_params
      params.require(:post).permit(:title, :post_url, :body, :blog_id)
    end

  end
end
