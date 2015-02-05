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

    def show

    end

    private

    def post_params
      params.require(:post).permit(:title, :post_url, :body, :blog_id)
    end

  end
end
