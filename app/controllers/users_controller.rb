class UsersController < ApplicationController
  def index
    if user_signed_in?
      @game = Game.order("RANDOM()").first
      @my_highscores = User.find(current_user.id).scores.first(10)
      @all_time_highscores = Score.all.order(score: :desc).first(10)
      render "index"
    else
      render "landing"
    end
  end
end
