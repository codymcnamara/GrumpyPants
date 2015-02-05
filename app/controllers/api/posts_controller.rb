module Api
  class PostsController < ApiController
    def create
      #current_blog
      #@post = current_user.blogs.new(blog_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show

    end

    private
    def current_blog
      if params[:id]
        @blog = Blog.find(params[:id])
      #in the post form, i'll be able to set the blog id params there. (good to know: params come from url path or the data you send ot the control)
      #maybe save this til I know how i'm gonna pass this stuff in, in the form
      end
    end

  end
end
