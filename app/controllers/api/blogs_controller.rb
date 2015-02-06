module Api
  class BlogsController < ApiController
    def create
      @blog = current_user.blogs.new(blog_params)
      # @blog = Blog.new(blog_params)
      # @blog.id = params[:id]
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
      # render :follow
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

    private
    def blog_params
      params.require(:blog).permit(:title, :filepicker_url)
    end
  end
end
