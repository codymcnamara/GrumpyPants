module Api
  class BlogsController < ApiController
    def create
      @blog = current_user.blogs.new(blog_params)

      if @blog.save
        render json: @blog
      else
        render json: @blog.errors.full_messages, status: :unprocessable_entity
      end
    end

    # def index
    #   @blogs = Blog.all
    #
    # end

    def show
      @blog = Blog.find(params[:id])
      render :show
    end

    def destroy

    end

  end

  private
  def blog_params
    params.require(:blog).permit(:title, :filepicker_url)
  end
end
