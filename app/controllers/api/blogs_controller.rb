module Api
  class BlogsController < ApiController
    def create
      @blog = Blog.new(blog_params)
      @blog.user_id = current_user.id

      if @blog.save
        render json: @blog
      else
        render json: @blog.errors.full_messages, status: :unprocessable_entity
      end
    end

    def follow
      @blog = Blog.find(params[:blog_id])
      @blog.followers << current_user
      render json: @blog
    end

    def unfollow
      @blog = Blog.find(params[:blog_id])
      @blog.followers -= [current_user]
      render json: @blog
    end

    def show
      @blog = Blog.find(params[:id])
      render :show
    end

    def destroy

    end

    def index
      @blogs = Blog.all
      render :index
    end

    private
    def blog_params
      params.require(:blog).permit(:title, :filepicker_url)
    end
  end
end
