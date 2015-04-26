class UsersController < ApplicationController
  def index
    if user_signed_in?
      @my_highscores = User.find(current_user.id).scores.order(score: :desc).first(10)
      render "index"
    else
      render "landing"
    end
  end
  def list
    @users = User.all.order(username: :asc)
  end
  def show
    @username =  User.find(params[:id]).username
    @highscores = User.find(params[:id]).scores.order(score: :desc).first(10)
  end
end
