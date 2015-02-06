module Api
  class FollowingsController < ApiController
    def create
      # follow params just has the blog_id
      @follow = current_user.followings.new(follow_params)
      if @follow.save
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @follow = Following.find(:id)
      @follow.destroy
      
      # not sure what the point of render empy json is
      render json: {}
    end


    private
    def follow_params
      params.require(:following).require(:blog_id)
    end

  end

end
