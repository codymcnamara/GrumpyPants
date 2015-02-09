class UsersController < ApplicationController
  before_action :require_user!, except: [:create, :new]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      redirect_to '#/blogs/new'
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = current_user
    render :show
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
